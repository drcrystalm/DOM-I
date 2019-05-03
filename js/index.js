const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


//Nav Bar
let navigation = document.querySelectorAll("nav a");
let nav = document.querySelector("nav");

for (let i = 0; i < navigation.length; i++) {
  navigation[i].textContent = Object.values(siteContent.nav)[i];
  navigation[i].style.color = "green";
}

//CTA H1
let h1 = document.getElementsByTagName("h1");
//h1[0].innerHTML = siteContent.cta.h1;
h1[0].textContent = siteContent.cta.h1;


//Button
let button = document.getElementsByTagName("button");
button[0].textContent = siteContent.cta.button;

//CTA Image
let ctaImage = document.getElementById('cta-img');
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//h4s
let h4 = document.querySelectorAll(".main-content h4");

let mainContentArray = ["features", "about", "services", "product", "vision"];
for (let i = 0; i < mainContentArray.length; i++) {
  h4[i].textContent = siteContent["main-content"][`${mainContentArray[i]}-h4`];
}

//Top Content Text Content
// let h4 = document.getElementsByTagName(h4);
// h4[0].textContent = siteContent.main - content.features - h4;

//Middle Image
let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//Footer
// let footerText = document.getElementsByTagName("footer p");
// footerText.textContent = siteContent.footer.copyright;
// So I know that I am not selecting footer p correctly, how could I use getElementsByTagName here?

let footerText = document.querySelector("footer").querySelector("p");
footerText.textContent = siteContent.footer.copyright;