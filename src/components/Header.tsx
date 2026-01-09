import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames, projects } from "../constant";
import { useEffect, useState } from "react";

const defaultNavigation = [
    { name: 'Home', href: '', current: false },
    { name: 'Projects', href: '#', current: false },
    // { name: 'Contact', href: '#/contact', current: false },
]

function ProjectMenu({ type }: { type?: string }) {
    return type === "mobile"
        ?
        (
            <>
                <div className="text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</div>
                <div className="space-y-1 px-2">
                    {projects.map((item) => (
                        <DisclosureButton
                            key={item.id}
                            as="a"
                            href={"#project/" + item.id}
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </>
        )
        :
        (
            <Menu as="div" className="relative ml-3">
                <MenuButton className="relative flex max-w-xs items-center">
                    <a
                        className={classNames(
                            'text-gray-300 hover:bg-white/5 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium',
                        )}
                    >
                        Projects
                    </a>
                </MenuButton>
                <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                >
                    {projects.map((project) => (
                        <MenuItem key={project.id}>
                            <a
                                href={"#/project/" + project.id}
                                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                            >
                                {project.name}
                            </a>
                        </MenuItem>
                    ))}
                </MenuItems>
            </Menu>
        )
}

export default function Header() {
    const [navigation, setNavigation] = useState(defaultNavigation);

    useEffect(() => {
        const updateNavigation = () => {
            const currentHash = window.location.hash;
            const updatedNavigation = defaultNavigation.map((item) => ({
                ...item,
                current: item.href === currentHash,
            }));
            setNavigation(updatedNavigation);
        };

        updateNavigation(); // Run once initially
        window.addEventListener('hashchange', updateNavigation);

        return () => window.removeEventListener('hashchange', updateNavigation);
    }, []);

    return (
        <Disclosure as="nav" className="">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">

                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                {navigation.map((item, index) => (
                                    item.name === "Projects"
                                        ?
                                        <ProjectMenu key={index}/>
                                        :
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            aria-current={item.current ? 'page' : undefined}
                                            className={classNames(
                                                item.current ? 'bg-white/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                                'rounded-md px-3 py-2 text-sm font-medium',
                                            )}
                                        >
                                            {item.name}
                                        </a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                        </DisclosureButton>
                    </div>
                </div>
            </div>
            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    {navigation.map((item, index) => (
                        item.name === "Projects"
                            ?
                            <ProjectMenu type="mobile" key={index}/>
                            :
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-white/50 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}