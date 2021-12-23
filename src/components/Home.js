// ./client/src/components/Home.js
import React, { useContext } from 'react';
import UserContext from '../context/User/UserContext';
import wall from './images/wall.jpg'
import { Link } from 'react-router-dom';
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
    MenuIcon,
    QuestionMarkCircleIcon,
    SearchIcon,
    ShoppingBagIcon,
    XIcon,
} from '@heroicons/react/outline';

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];
const navigation = {
        categories: [
            {
                name: 'Women',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                        imageAlt:
                            'Models sitting back to back, wearing Basic Tee in black and bone.',
                    },
                    {
                        name: 'Basic Tees',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                        imageAlt:
                            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
                    },
                    {
                        name: 'Accessories',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
                        imageAlt:
                            'Model wearing minimalist watch with black wristband and white watch face.',
                    },
                    {
                        name: 'Carry',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
                        imageAlt:
                            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
                    },
                ],
            },
            {
                name: 'Men',
                featured: [
                    {
                        name: 'New Arrivals',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
                        imageAlt:
                            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
                    },
                    {
                        name: 'Basic Tees',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
                        imageAlt: 'Model wearing light heather gray t-shirt.',
                    },
                    {
                        name: 'Accessories',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
                        imageAlt:
                            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
                    },
                    {
                        name: 'Carry',
                        href: '#',
                        imageSrc:
                            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
                        imageAlt:
                            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
                    },
                ],
            },
        ],
    pages: [
        { name: 'Company', href: '#' },
        { name: 'Stores', href: '#' },
    ],
};
const categories = [
    {
        name: 'New Arrivals',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg',
    },
    {
        name: 'Productivity',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg',
    },
    {
        name: 'Workspace',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg',
    },
    {
        name: 'Accessories',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg',
    },
    {
        name: 'Sale',
        href: '#',
        imageSrc:
            'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg',
    },
];
const collections = [
    {
        name: 'Harry Potter disfrutando de las excepcionales comodidades en casa de sus tíos.',
        href: '#',
        imageSrc:
            'https://kbimages1-a.akamaihd.net/93affabc-5161-421e-80d5-4477a07b8cee/1200/1200/False/harry-potter-and-the-philosopher-s-stone-3.jpg',
        imageAlt:
            'Brown leather key ring with brass metal loops and rivets on wood table.',
        description:
            'Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley.',
    },
    {
        name: 'Harry vuelve a la carga en este nuevo libro ahora desde el Ministerio de Magia',
        href: '#',
        imageSrc:
            'https://images-na.ssl-images-amazon.com/images/I/91bZXDTk2kL.jpg',
        imageAlt:
            'Natural leather mouse pad on white desk next to porcelain mug and keyboard.',
        description:
            'Una nueva aventura infaltable para los fanáticos de Harry Potter.',
    },
    {
        name: 'El Hobbit en su primera gran aventura',
        href: '#',
        imageSrc:
            'https://images-na.ssl-images-amazon.com/images/I/81VxEj--PkL.jpg',
        imageAlt:
            'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.',
        description:
            'Sacado de su cómodo agujero-hobbit por Gandalf y una banda de enanos, Bilbo se encuentra de pronto en medio de una conspiración.',
    },
];
const footerNavigation = {
    shop: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    account: [
        { name: 'Manage Account', href: '#' },
        { name: 'Returns & Exchanges', href: '#' },
    ],
    connect: [
        { name: 'Contáctenos', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
    ],
};

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Home() {
    const ctx = useContext(UserContext);
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { verifyingToken } = ctx;

    return (
        <>
            <div className="bg-white">
                {/* Mobile menu */}
                <Transition.Root show={mobileMenuOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 flex z-40 lg:hidden"
                        onClose={setMobileMenuOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">
                                            Close menu
                                        </span>
                                        <XIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="border-b border-gray-200">
                                        <Tab.List className="-mb-px flex px-4 space-x-8">
                                            {navigation.categories.map(
                                                category => (
                                                    <Tab
                                                        key={category.name}
                                                        className={({
                                                            selected,
                                                        }) =>
                                                            classNames(
                                                                selected
                                                                    ? 'text-indigo-600 border-indigo-600'
                                                                    : 'text-gray-900 border-transparent',
                                                                'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                                                            )
                                                        }
                                                    >
                                                        {category.name}
                                                    </Tab>
                                                ),
                                            )}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map(category => (
                                            <Tab.Panel
                                                key={category.name}
                                                className="px-4 py-6 space-y-12"
                                            >
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                                                    {category.featured.map(
                                                        item => (
                                                            <div
                                                                key={item.name}
                                                                className="group relative"
                                                            >
                                                                <div className="aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden group-hover:opacity-75">
                                                                    <img
                                                                        src={
                                                                            item.imageSrc
                                                                        }
                                                                        alt={
                                                                            item.imageAlt
                                                                        }
                                                                        className="object-center object-cover"
                                                                    />
                                                                </div>
                                                                <a
                                                                    href={
                                                                        item.href
                                                                    }
                                                                    className="mt-6 block text-sm font-medium text-gray-900"
                                                                >
                                                                    <span
                                                                        className="absolute z-10 inset-0"
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </a>
                                                                <p
                                                                    aria-hidden="true"
                                                                    className="mt-1 text-sm text-gray-500"
                                                                >
                                                                    Shop now
                                                                </p>
                                                            </div>
                                                        ),
                                                    )}
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {navigation.pages.map(page => (
                                        <div
                                            key={page.name}
                                            className="flow-root"
                                        >
                                            <a
                                                href={page.href}
                                                className="-m-2 p-2 block font-medium text-gray-900"
                                            >
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 p-2 block font-medium text-gray-900"
                                        >
                                            Create an account
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a
                                            href="#"
                                            className="-m-2 p-2 block font-medium text-gray-900"
                                        >
                                            Sign in
                                        </a>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {/* Currency selector */}
                                    <form>
                                        <div className="inline-block">
                                            <label
                                                htmlFor="mobile-currency"
                                                className="sr-only"
                                            >
                                                Currency
                                            </label>
                                            <div className="-ml-2 group relative border-transparent rounded-md focus-within:ring-2 focus-within:ring-white">
                                                <select
                                                    id="mobile-currency"
                                                    name="currency"
                                                    className="bg-none border-transparent rounded-md py-0.5 pl-2 pr-5 flex items-center text-sm font-medium text-gray-700 group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent"
                                                >
                                                    {currencies.map(
                                                        currency => (
                                                            <option
                                                                key={currency}
                                                            >
                                                                {currency}
                                                            </option>
                                                        ),
                                                    )}
                                                </select>
                                                <div className="absolute right-0 inset-y-0 flex items-center pointer-events-none">
                                                    <svg
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                        className="w-5 h-5 text-gray-500"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="1.5"
                                                            d="M6 8l4 4 4-4"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </Transition.Child>
                    </Dialog>
                </Transition.Root>

                {/* Hero section */}
                <div className="relative bg-gray-900">
                    {/* Decorative image and overlay */}
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 overflow-hidden"
                    >
                        <img
                            src={wall}
                            alt=""
                            className="w-full h-full object-center object-cover"
                        />
                    </div>
                    <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gray-900 opacity-50"
                    />

                    {/* Navigation */}
                    <header className="relative z-10">
                        <nav aria-label="Top">
                            {/* Top navigation */}

                            {/* Secondary navigation */}
                        </nav>
                    </header>

                    <div className="relative max-w-3xl mx-auto py-32 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white lg:text-6xl">
                            Los mejores y nuevos títulos están aquí!
                        </h1>
                        <p className="mt-4 text-xl text-white">
                            Visite nuestro catálogo de libros en línea llegando
                            cada semana o suscríbase a nuestro boletín
                            electrónico.
                        </p>
                        {/*                         <a
                            href="/books"
                            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                            Ver nuevos títulos
                        </a> */}
                        <Link
                            to="/books"
                            className="mt-8 inline-block bg-white border border-transparent rounded-md py-3 px-8 text-base font-medium text-gray-900 hover:bg-gray-100"
                        >
                            Ver nuevos títulos
                        </Link>
                    </div>
                </div>

                <main>
                    {/* Category section */}

                    {/* Collection section */}
                    <section
                        aria-labelledby="collection-heading"
                        className="max-w-xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
                    >
                        <h2
                            id="collection-heading"
                            className="text-2xl font-extrabold tracking-tight text-gray-900"
                        >
                            Visite las colecciones más recientes.
                        </h2>

                        <div className="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                            {collections.map(collection => (
                                <a
                                    key={collection.name}
                                    href={collection.href}
                                    className="group block"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
                                    >
                                        <img
                                            src={collection.imageSrc}
                                            alt={collection.imageAlt}
                                            className="w-full h-full object-center object-cover"
                                        />
                                    </div>
                                    <h3 className="mt-4 text-base font-semibold text-gray-900">
                                        {collection.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {collection.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Featured section */}
                </main>

                <footer
                    aria-labelledby="footer-heading"
                    className="bg-gray-900"
                >
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                                <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-medium text-white">
                                            Conectar
                                        </h3>
                                        <ul
                                            role="list"
                                            className="mt-6 space-y-6"
                                        >
                                            {footerNavigation.connect.map(
                                                item => (
                                                    <li
                                                        key={item.name}
                                                        className="text-sm"
                                                    >
                                                        <a
                                                            href={item.href}
                                                            className="text-gray-300 hover:text-white"
                                                        >
                                                            {item.name}
                                                        </a>
                                                    </li>
                                                ),
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-12 md:mt-16 xl:mt-0">
                                <h3 className="text-sm font-medium text-white">
                                    Ingrese su dirección electrónica y
                                    suscríbase a nuestro boletin de noticias.
                                </h3>
                                <p className="mt-6 text-sm text-gray-300">
                                    Las últimas noticias de nuestros libros más
                                    recientes llegando directamente a su correo
                                    electrónico.
                                </p>
                                <form className="mt-2 flex sm:max-w-md">
                                    <label
                                        htmlFor="email-address"
                                        className="sr-only"
                                    >
                                        Dirección de Correo Electrónico.
                                    </label>
                                    <input
                                        id="email-address"
                                        type="text"
                                        autoComplete="email"
                                        required
                                        className="appearance-none min-w-0 w-full bg-white border border-white rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                                    />
                                    <div className="ml-4 flex-shrink-0">
                                        <button
                                            type="submit"
                                            className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500"
                                        >
                                            Suscribirse
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
