import db from '../databaseConnection';

const rootRef = db.ref("/");
const aboutUsHomeSectionRef = db.ref("/aboutUsHomeSection");

let allData = {
    aboutUs: [],
    featuredProducts: [],
    aboutUsHomeSection: {},
    contactUs: {},
    featuredStories: {},
    findAStore: {},
    homeHeader: {},
    instaBanner: {},
    products: [],
    productsPageHeader: {},
    subscriberBanner: {},
    villagersStories: [],
    villagersStoriesHeader: {}
};
let aboutUsData = [];
let featuredProductsData = [];
let productsData = [];

const log = (thing) => {
    console.log("[firebaseGetData]", thing)
};
const menu = {
    menuItems: [
        {
            name: "Home",
            url: "/",
        },
        {
            name: "About Us",
            url: "/about-us",
        },
        {
            name: "Villagers",
            url: "/villagers",
        },
        {
            name: "Products",
            url: "/products",
        },
        {
            name: "Contact Us",
            url: "/contact-us",
        },
        {
            name: "Find A Store",
            url: "/find-a-store",
        }
    ],
    logo: {
        src: '/b-west-latin-logo.png'
        , alt: 'B-West Logo'
    },
};

rootRef.on("value", function (snapshot) {

    let allItems = snapshot.val();


    allData.menu = menu;
    allData.aboutUsHomeSection = allItems.aboutUsHomeSection;
    allData.contactUs = allItems.contactUs;
    allData.featuredStories = allItems.featuredStories;
    allData.homeHeader = allItems.homeHeader;
    allData.instaBanner = allItems.instaBanner;
    allData.productsPageHeader = allItems.productsPageHeader;
    allData.subscriberBanner = allItems.subscriberBanner;
    allData.villagersStoriesHeader = allItems.villagersStoriesHeader;
    /**/
    let aboutUsItems = allItems.aboutUs;
    aboutUsData = [];
    for (let itemKey in aboutUsItems) {
        const itemData = aboutUsItems[itemKey];
        aboutUsData.push({
            ...itemData,
            id: itemKey,

        });
    }
    allData.aboutUs = aboutUsData;
    /**/

    /**/

    let featuredProductsItems = allItems.featuredProducts;
    featuredProductsData = [];
    for (let itemKey in featuredProductsItems) {
        const itemData = featuredProductsItems[itemKey];
        featuredProductsData.push({
            ...itemData,
            id: itemKey

        });
    }
    allData.featuredProducts = featuredProductsData;

    /**/

    /**/
    let findAStoreItems = allItems.findAStore;
    let sotresItems = findAStoreItems.stores;
    let stores = [];
    for (let itemKey in sotresItems) {
        const itemData = sotresItems[itemKey];
        stores.push({
            ...itemData,
            id: itemKey

        });
    }
    findAStoreItems.stores = stores;
    allData.findAStore = findAStoreItems;
    /**/

    /**/

    let productsItems = allItems.products;
    productsData = [];
    for (let itemKey in productsItems) {
        const itemData = productsItems[itemKey];
        productsData.push({
            ...itemData,
            id: itemKey

        });
    }
    allData.products = productsData;
    /**/

    /**/

    let villagersStoriesItems = allItems.villagersStories;

    let villagersStoriesData = [];
    for (let itemKey in villagersStoriesItems) {

        let imagesData = [];
        const itemData = villagersStoriesItems[itemKey];
        let images = itemData.images;

        for (let imageKey in images) {
            imagesData.push({
                ...images[imageKey],
                id: imageKey

            });
        }
        itemData.images = imagesData;
        villagersStoriesData.push({
            ...itemData,
            id: itemKey

        });
    }
    allData.villagersStories = villagersStoriesData;

    /**/

}, function (errorObject) {
    log("The read failed: " + errorObject.code);
});

const listeners = [];

export const once = (listener) => {
    subscribe((data) => {
        listener(data);
        unsubscribe(listener);
    })
};

export const subscribe = (listener) => {
    listeners.push(listener);
    return unsubscribe.bind(null, listener);
};

export const unsubscribe = (listener) => {
    const index = listeners.indexOf(listener);
    if (index >= 0) {
        listeners.splice(index, 1);
        return subscribe.bind(null, listener)
    }
};

const trigger = () => {
    listeners.forEach(listener => listener(allData))
};


let _hasLoaded = false;

export const hasLoaded = () => {
    return _hasLoaded
};

rootRef.on("value", trigger);

once(() => {
    _hasLoaded = true
});

export  {aboutUsHomeSectionRef}