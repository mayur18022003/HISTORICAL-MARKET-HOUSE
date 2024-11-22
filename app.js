// Function to open the modal
/*

function openModal(productId) {
    var modal = document.getElementById("myModal");
    var productImage = document.getElementById(productId).querySelector("img").src;







    var modalProductImage = document.getElementById("modal-product-image");


    modalProductImage.src = productImage;
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to calculate total price based on quantity
function calculateTotal() {
    var quantity = parseInt(document.getElementById("quantity").value);

    var discountedPrice = 40; // Example discounted price
    var totalPrice = quantity * discountedPrice;
    document.getElementById("total-price").textContent = "₹" + totalPrice;
}

document.getElementById("quantity").addEventListener("input", calculateTotal);*/

document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in based on cookie data
    const isLoggedIn = checkIfLoggedIn(); // Function to check if the user is logged in, you need to implement this

    // Get user icon and cart icon elements
    const userIcon = document.getElementById('userIcon');
    const cartIcon = document.querySelector('.user-options a[href="cart.html"]');

    // If the user is not logged in, replace user icon and cart icon with login and signup buttons
    if (!isLoggedIn) {
        // Create login and signup buttons
        const loginButton = createButton('Log In', 'login.html');
        const signupButton = createButton('Sign Up', 'signup.html');

        // Replace user icon with login button
        userIcon.replaceWith(loginButton);

        // Remove cart icon
        cartIcon.replaceWith(signupButton);
    }

    // Function to create a button element
    function createButton(text, href) {
        const button = document.createElement('a');
        button.href = href;
        button.textContent = text;
        button.classList.add('login-btn');
        button.classList.add('signup-btn');
        button.classList.add('user-icon'); // Add the class to style it similar to the user icon
        return button;
    }

    function checkIfLoggedIn() {
        // Find the userData cookie
        const userDataCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userData='));

        // If userData cookie is found, the user is logged in
        if (userDataCookie) {
            return true;
        } else {
            return false;
        }
    }
});
var products = [{
        id: 'product1',
        imageSrc: 'images/GANAPATI.jpg',
        name: 'STANDING GANESHA',
        category: 'sunglasses',
        description: 'This vintage, colourful wooden idol  is an unique representation of Lord Ganesha that catches instant attention.',
        originalPrice: '15000/-',
        discountedPrice: '12000/-',
        discountPercentage: '20% OFF'
    }, {
        id: 'product2',
        imageSrc: 'images/hanumanjpg.jpg',
        name: 'Wooden Idol OfHanuman',
        category: 'sunglasses',
        description: 'This vintage Hanuman statue is a collector’s item that has been handpicked for its originality. Carved from wood, this statue shows Hanuman in a standing pose.',
        originalPrice: '10000/-',
        discountedPrice: '8500/-',
        discountPercentage: '15% OFF'
    }, {
        id: 'product3',
        imageSrc: 'images/WOODEN SWAN.jpg',
        name: 'WOODEN SWAN',
        category: 'sunglasses',
        description: 'This vintage, colourful wooden swan is a striking artefact that catches instant attention. This coloured bird painted with vegetable dye is believed to be from Kerala.',
        originalPrice: '1,000/-',
        discountedPrice: '1,000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product4',
        imageSrc: 'images/PILICHAMUNDI ON TIGER.jpg',
        name: 'PILICHAMUNDI ON TIGER',
        category: 'sunglasses',
        description: 'This vintage  idol of a deity riding a Tiger is a Pilichamundi. Riding a tiger, the deity here personifies the spirit of a Pilichamundi. The deity is shown wearing a finely carved head gear, very elaborate Ani (across his waist and torso) and Gaggara (sacred anklets). ',
        originalPrice: '55,000/-',
        discountedPrice: '43,000/-',
        discountPercentage: '20% OFF'
    }, {
        id: 'product5',
        imageSrc: 'images/ORNATE NANDI.jpg',
        name: 'ORNATE NANDI',
        category: 'sunglasses',
        description: 'This vintage, colourful wooden bull is a striking artefact that catches instant attention. This coloured bull painted with vegetable dye is rare artefact believed to be from Tamil Nadu. The bull also represents Nandi, the divine mount of Lord Shiva. ',
        originalPrice: '11,000/-',
        discountedPrice: '11,000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product6',
        imageSrc: 'images/PANJURLI MASK.jpg',
        name: 'PANJURLI MASK',
        category: 'sunglasses',
        description: 'This magnificent ancient bronze mask which is a precious collectible is that of a Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola.',
        originalPrice: '13000/-',
        discountedPrice: '11400/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product7',
        imageSrc: 'images/NANDI PAINTED IN VEGETABLE DYE.jpg',
        name: 'NANDI PAINTED IN VEGETABLE DYE',
        category: 'sunglasses',
        description: 'This vintage, colourful wooden bull is a striking artefact that catches instant attention. This coloured bull painted with vegetable oil paint is believed to be from Tamil Nadu. The bull also represents Nandi, the divine mount of Lord Shiva.',
        originalPrice: '22000/-',
        discountedPrice: '22000',
        discountPercentage: '00% OFF'
    }, {
        id: 'product8',
        imageSrc: 'images/GODDESS KALI IN WOOD.jpg',
        name: 'GODDESS KALI IN WOOD',
        category: 'sunglasses',
        description: 'This vintage and remarkable rare collectible is a wooden idol of Goddess Kali with her foot on Lord Shiva’s chest. This beautiful and striking artefact is from Kerala (Palakkad region). It is made of jack fruit wood and adorned with vegetable oil paint mixed with stone powder.',
        originalPrice: '160000',
        discountedPrice: '160000',
        discountPercentage: '00% OFF'
    }, {
        id: 'product9',
        imageSrc: 'images/SHIVALINGA WITH NAGA.jpg',
        name: 'SHIVALINGA WITH NAGA',
        category: 'sunglasses',
        description: 'This beautiful, vintage idol is of Naga (Snake god) forming a canopy over a Shivaling with its hood. It is made of bronze and is from North Karnataka where it is one of the common representations of Lord Shiva with Naga. ',
        originalPrice: '8000',
        discountedPrice: '8000',
        discountPercentage: '00% OFF'
    }, {
        id: 'product10',
        imageSrc: 'images/WOODEN IDOL OF MOTHER MARY WITH JESUS.jpg',
        name: 'WOODEN IDOL OF MOTHER MARY WITH JESUS',
        category: 'sunglasses',
        description: 'This vintage, hand carved and beautiful figure is of the most worshipped Christian deities of Mother Mary with Jesus . This Mother Mary idol belongs to the Portuguese era and is from Goa. The wooden idol has been adorned with polychrome paint. ',
        originalPrice: '28000',
        discountedPrice: '28000',
        discountPercentage: '00% OFF'
    }, {
        id: 'product11',
        imageSrc: 'images/ANTIQUE NETTUR JEWELLERY BOX.jpg',
        name: 'ANTIQUE NETTUR JEWELLERY BOX',
        category: 'active-outdoor',
        description: 'TNettur Petti  also known as Malabar Box , a traditional jewellery box  usually made of Rosewood  or Jackfruit wood – was used by ladies of erstwhile aristocratic and royal families of Kerala.',
        originalPrice: '27000/-',
        discountedPrice: '27000',
        discountPercentage: '00% OFF'
    }, {
        id: 'product12',
        imageSrc: 'images/SWAN SHAPED PAN BOX.jpg',
        name: 'SWAN SHAPED PAN BOX',
        category: 'active-outdoor',
        description: 'This beautiful and antique collectible is a pan box shaped as a swan and is from North India. Pan boxes were either used to keep rolled betel leaf stuffed with betel nut, lime paste and other mixes or to store these ingredients separately to make a pan.',
        originalPrice: '5000/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product13',
        imageSrc: 'images/ASH BOX WITH NANDI.jpg',
        name: 'ASH BOX WITH NANDI',
        category: 'active-outdoor',
        description: 'This antique Vibhuti box made of teak wood has a wooden sculpted Nandi (Lord Shiva’s mount) on its lid and has wooden wheels.',
        originalPrice: '5000/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product14',
        imageSrc: 'images/PAINTED WOODEN CHEST.jpg',
        name: 'PAINTED WOODEN CHEST',
        category: 'active-outdoor',
        description: 'This regal collectible is a painted wooden chest from Rajasthan. The chest is made of hard wood and has been painted all over. The painting depicts a hunting party in a jungle - opulently dressed royals carrying guns riding exquisitely decorated Elephants.',
        originalPrice: '24500/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product15',
        imageSrc: 'images/TRAVEL PRAYER BOX.jpg',
        name: 'TRAVEL PRAYER BOX',
        category: 'active-outdoor',
        description: 'This extremely unique collectible is a portable metal prayer box used by the Jain community while travelling. It is hand-painted and adorned with exquisite Gattaji Art.',
        originalPrice: '10000/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product16',
        imageSrc: 'images/ORNAMENTAL METAL INKPOT WITH PEN CASE.jpg',
        name: 'ORNAMENTAL METAL INKPOT WITH PEN CASE',
        category: 'active-outdoor',
        description: 'This antique ink pot with dainty carvings is sure to make a great addition to your collection of vintage items. It is thought that this antique writing instrument is originally from Rajasthan. The art of making decorative inkpots is believed to have originated in Egypt and then reached China.',
        originalPrice: '6500/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product17',
        imageSrc: 'images/ENGRAVED CAR SHAPED PAN BOX.jpg',
        name: 'ENGRAVED CAR SHAPED PAN BOX',
        category: 'active-outdoor',
        description: 'This beautiful and antique collectible is a pan box shaped as a car and is believed to be from Delhi. Pan boxes were either used to keep rolled betel leaf stuffed with betel nut, lime paste and other mixes or to store these ingredients separately to make a pan.',
        originalPrice: '6000/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product18',
        imageSrc: 'images/CHEST WITH BRASS EMBELLISHMENTS.jpg',
        name: 'CHEST WITH BRASS EMBELLISHMENTS',
        category: 'active-outdoor',
        description: 'This antique intricately decorated collectible is a wooden chest from Rajasthan.The chest is made of hard wood and has intricate pattern of ferns carved onto it. It is also adorned with lot of the brass embellishments in the form of stars. The chest also has various small compartments in it to store different things.',
        originalPrice: '26500/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product19',
        imageSrc: 'images/VINTAGE COAL IRON BOX.jpg',
        name: 'VINTAGE COAL IRON BOX',
        category: 'active-outdoor',
        description: 'This beautiful collectible is a coal iron box with a wooden handle, from Delhi.This vintage iron coal iron box will add an old world charm to your home décor.This object is photographed without touching its original condition, it can be cleaned and polished to suit your needs',
        originalPrice: '26500/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product20',
        imageSrc: 'images/RARE CAR SHAPED PAN BOX WITH SEPARATE COMPARTMENTS.jpg',
        name: 'RARE CAR SHAPED PAN BOX WITH SEPARATE COMPARTMENTS',
        category: 'active-outdoor',
        description: 'Bring together your passion for automobiles and the delicious pan with this vintage brass pan box designed in the shape of a car. With a carved bonnet, cut-out windows, and realistic tires, this pan box looks like a real car. The car roof forms the lid of the pan box, and the car body forms the base of the box, which has numerous compartments. This vintage pan box is believed to be of Uttar Pradesh origin.',
        originalPrice: '6000/-',
        discountedPrice: '3200',
        discountPercentage: '7% OFF'
    }, {
        id: 'product21',
        imageSrc: 'images/PANJURLI MASK.jpg',
        name: 'PANJURLI MASK',
        category: 'exclusive-footwear',
        description: 'This magnificent ancient bronze mask which is a precious collectible is that of a Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. As per Paddanas – the ancient Tulu oral literature, Goddess Parvati kept an offspring of a Wild boar as her pet and loved it dearly.',
        originalPrice: '130000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product22',
        imageSrc: 'images/PANJURLI BOAR MASK.jpg',
        name: 'PANJURLI BOAR MASK',
        category: 'exclusive-footwear',
        description: 'This is Panjurli mask. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. In Tululand many wild boars used to destroy cultivated crops of farmers and hence farmers started worshipping the spirits of wild boars.',
        originalPrice: '170000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product23',
        imageSrc: 'images/PANJURLI WITH NAGA ADORNMENT.jpg',
        name: 'PANJURLI WITH NAGA ADORNMENT',
        category: 'exclusive-footwear',
        description: 'This ancient mask is a precious collectible of Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. In Tululand many wildboars used to destroy cultivated crops of farmers and hence farmers started worshipping the spirits of wildboars.',
        originalPrice: '88000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product24',
        imageSrc: 'images/WOODEN TRIBAL MASK.jpg',
        name: 'WOODEN TRIBAL MASK',
        category: 'exclusive-footwear',
        description: 'This unique coloured mask is  from Kerala. It is vividly coloured in red and white enamel paint. Such masks were used in performances which were a medium of spreading stories from ancient mythology.This rare vintage mask will add a quirky charm to your home décor and will make a personal statement.',
        originalPrice: '18000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product25',
        imageSrc: 'images/WOODEN BUST OF A KING.jpg',
        name: 'WOODEN BUST OF A KING',
        category: 'exclusive-footwear',
        description: 'This exquisite and beautiful collectible is  bust of a king and is believed to be from Uttar Pradesh. This Vintage King’s statue is made of dark wood. The vintage wooden statue has been hand carved with intricate detailing right from the crown, attire and ornaments to the beard. The face with closed eyes bears a very serene expression.',
        originalPrice: '9000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product26',
        imageSrc: 'images/FACE OF HANUMAN.jpg',
        name: 'FACE OF HANUMAN',
        category: 'exclusive-footwear',
        description: 'This unique and exquisite collectible is a hand carved face of Lord Hanuman, one of the most popular deities of Hinduism. It is made of wood and has been painted in bright colours that lend it a beautiful look.',
        originalPrice: '10000/-',
        discountedPrice: '50000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product27',
        imageSrc: 'images/GOWRI HEAD.jpg',
        name: 'GOWRI HEAD',
        category: 'exclusive-footwear',
        description: 'This beautiful and unique idol is a face of Goddess Gowri. The bejewelled and intricately decorated face made of bronze is believed to be from South India (Karnataka or Tamil Nadu).Goddess Gowri is Shakti or Mother Goddess and an incarnation of Parvati. Gowri is the domesticated and benevolent form of Parvati while Kali is the other extreme form. Gowri also successfully domesticates Shiva who till then lived as an ascetic with no interest in the world.',
        originalPrice: '11000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product28',
        imageSrc: 'images/PANJURLI (WILD BOAR) MASK.jpg',
        name: 'PANJURLI (WILD BOAR) MASK',
        category: 'exclusive-footwear',
        description: 'This magnificent ancient wooden face is that of a Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. As per Paddanas – the ancient Tulu oral literature, Goddess Parvati kept an offspring of a Wild boar as her pet and loved it dearly. It was very naughty and destroyed the gardens in Kailash. Lord Shiva angered by this, killed the Wild Boar. This upset Parvati greatly. To pacify her, Shiva brought it back to life as a spirit and sent it to Earth to protect the people and steer them from evil to good.',
        originalPrice: '20000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product29',
        imageSrc: 'images/PANJURLI.jpg',
        name: 'PANJURLI',
        category: 'exclusive-footwear',
        description: 'This magnificent collectible mask is  of Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. In Tululand many wild boars used to destroy cultivated crops of farmers and hence farmers started worshipping the spirits of wild boars. This was probably later absorbed in Hinduism through the following story.As per Paddanas – the ancient Tulu oral literature, Goddess Parvati kept an offspring of a Wild boar as her pet and loved it dearly. It was very naughty and destroyed the gardens in Kailash. ',
        originalPrice: '110000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product30',
        imageSrc: 'images/PANJURLI.jpg',
        name: 'PANJURLI',
        category: 'exclusive-footwear',
        description: 'This magnificent collectible mask is  of Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. In Tululand many wild boars used to destroy cultivated crops of farmers and hence farmers started worshipping the spirits of wild boars. This was probably later absorbed in Hinduism through the following story.As per Paddanas – the ancient Tulu oral literature, Goddess Parvati kept an offspring of a Wild boar as her pet and loved it dearly. It was very naughty and destroyed the gardens in Kailash. ',
        originalPrice: '110000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product31',
        imageSrc: 'images/EUROPEAN CANDLE STAND.jpg',
        name: 'EUROPEAN CANDLE STAND',
        category: 'jewellery',
        description: 'This beautiful, rare and vintage collectible is a hand-carved wooden candle stand. The tiered candle stand with intricately carved flower motifs clearly shows the European influence. The antique candle stand has a 3-leg base, an intricately-carved column, and a flat platform on top to place the candle.',
        originalPrice: '9500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product32',
        imageSrc: 'images/PAIR OF VINTAGE GOLDEN CANDLE STANDS.jpg',
        name: 'PAIR OF VINTAGE GOLDEN CANDLE STANDS',
        category: 'jewellery',
        description: 'These majestic vintage candle stands, heavily inspired by Portugese design are made  of wood and have been painted in gilded gold colour. These are from the churches in Kerala.The intricate detailing on the candles and the heavy ornamentation suggest that they might have been used as altar candles. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.',
        originalPrice: '44000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product33',
        imageSrc: 'images/ANTIQUE DEEPAM STAND.jpg',
        name: 'ANTIQUE DEEPAM STAND',
        category: 'jewellery',
        description: 'This vintage and beautifully structured wooden object is a Deepam stand (stand to keep diyas). It is believed to be from Palakkad.This stand fashioned as a temple pillar is made of single piece of Jack fruit wood. This stand fashioned as a temple pillar is made of Jack fruit wood.This intricately hand carved wooden Deepam stand which can also be used as a candle stand, will add an irresistible ethic touch to your home décor. ',
        originalPrice: '6500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product34',
        imageSrc: 'images/DEEPAM WITH CROSS.jpg',
        name: 'DEEPAM WITH CROSS',
        category: 'jewellery',
        description: 'This is a vintage and very unique Deepam (to light diyas or lamps). It is from Kerala. The fusion of cultures is what makes this Deepam very interesting and one of a kind – Deepams are used in regular Hindu ceremonies but with a cross on the top, this is used in Christian ceremonies an example of Indo-European cultural fusionThis rare and artistic collectible will add an irresistible unique touch to your home décor. ',
        originalPrice: '8800/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product35',
        imageSrc: 'images/RARE VINTAGE PINK CANDLE STAND.jpg',
        name: 'RARE VINTAGE PINK CANDLE STAND',
        category: 'jewellery',
        description: 'This majestic vintage candle stand, heavily inspired by Portuguese design is made  of wood and has been painted in fresh pink colour. This is from the churches in Goa. The intricate detailing on the candle and the ornamentation suggest that it must have been used as an altar candle. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.This rich wooden candle has a beautiful patterned base. This decorative candle stand will add a regal touch to your home decor. ',
        originalPrice: '12500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product36',
        imageSrc: 'images/GOLDEN WOODEN CANDLE STAND.jpg',
        name: 'GOLDEN WOODEN CANDLE STAND',
        category: 'jewellery',
        description: 'This majestic vintage candle stand, heavily inspired by Portuguese design is made  of wood and has been painted in gilded gold colour. This is from the churches in Kerala. The intricate detailing on the candle and the heavy ornamentation suggest that it must have been used as an altar candle. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.',
        originalPrice: '22000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product37',
        imageSrc: 'images/HAND CARVED DEEPAM STAND.jpg',
        name: 'HAND CARVED DEEPAM STAND',
        category: 'jewellery',
        description: 'This vintage and beautifully structured wooden object is a Deepam stand (stand to keep traditional lamps). It is from Palakkad – border of Kerala and Tamil Nadu. Although modern day electric lighting has phased out candles in todays world, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces. This stand fashioned as a temple pillar is made of single piece of Jack fruit wood.',
        originalPrice: '6000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product38',
        imageSrc: 'images/METAL CANDLE STANDS.jpg',
        name: 'METAL CANDLE STANDS',
        category: 'jewellery',
        description: 'These vintage metal candle stands are inspired by European designs. These are from Goa. Although modern day electric lighting has phased out candles in todays world, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.',
        originalPrice: '13000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product39',
        imageSrc: 'images/VINTAGE CANDLE STANDS.jpg',
        name: 'VINTAGE CANDLE STANDS',
        category: 'jewellery',
        description: 'This pair of vintage minimal wooden candle stand is Portuguese inspired. It is from Kerala. This candle stand could have belonged to a church in Kerala.This pair of wooden candle stand is painted white and golden.This decorative candle stand will add an old world charm to your home décor. ',
        originalPrice: '34000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product40',
        imageSrc: 'images/VINTAGE CANDLE STAND.jpg',
        name: 'VINTAGE CANDLE STAND',
        category: 'jewellery',
        description: 'This beautiful, rare and vintage collectible is a wooden hand carved candle stand.The beautiful curves and vegetable dye paint on the carving. This mounted wooden candle stand can be kept as a decorative piece to enhance your home décor. The simple curves on this candle stand are an example of fine art of wood carving practised during this period. ',
        originalPrice: '7000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product41',
        imageSrc: 'images/ST. ROCKY POLYCHROME WOODEN IDOL.jpg',
        name: 'ST. ROCKY POLYCHROME WOODEN IDOL',
        category: 'sport-cap',
        description: 'This vintage, hand carved and beautiful Christian figure in brown robes is believed to be St. Rocky or Saint Roch. This wooden figure belongs to the Portuguese era and is from Kerala.  The wooden idol has been adorned with polychrome paint. Saint Roch is a Catholic saint from Italy who is specially invoked against the plague. He is the patron saint of dogs, falsely accused people and bachelors. He had a miraculous birth mark of a Red Cross on his chest that grew as he did.',
        originalPrice: '96000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product42',
        imageSrc: 'images/WOODEN IDOL OF MOTHER MARY WITH JESUS.jpg',
        name: 'WOODEN IDOL OF MOTHER MARY WITH JESUS',
        category: 'sport-cap',
        description: 'This vintage, hand carved and beautiful figure is of the most worshipped Christian deities of Mother Mary with Jesus . This Mother Mary idol belongs to the Portuguese era and is from Goa. The wooden idol has been adorned with polychrome paint.Mary or Mariam of Nazareth is the mother of Lord Jesus. Many believe that she conceived her son as a virgin, by the Holy Spirit. Hence she is also referred to as Virgin Mary. Mother Mary is considered as the most meritorious Saint by millions of Christians. ',
        originalPrice: '28000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product43',
        imageSrc: 'images/CHALICE WITH EUROPEAN INFLUENCE.jpg',
        name: 'CHALICE WITH EUROPEAN INFLUENCE',
        category: 'sport-cap',
        description: 'This vintage and rare collectible is a Chalice made. This intricately decorated Chalice that shows European influence is believed to be from Kerala. The Chalice has intricate fine carving that shows exquisite craftsmanship. It also comes with a  Pate – a cover for the Chalice.A Chalice is a wide based cup that is intended to hold a drink. In religious practice, a Chalice is used for drinking during a ceremony. Chalices have been in use since the  early Church times. Since they played an important role in religious ceremonies,  they were highly decorated and treated with great respect.',
        originalPrice: '36000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product44',
        imageSrc: 'images/WOODEN IDOL OF ST. JOSEPH.jpg',
        name: 'WOODEN IDOL OF ST. JOSEPH',
        category: 'sport-cap',
        description: 'This vintage, hand carved and beautiful Christian figure in dark grey and brown robes is believed to be St. Joseph of Bethlehem and the baby in his hand is infant Jesus. This wooden figure belongs to the Portuguese era and is from Kerala.  The wooden idol has been adorned with polychrome paint.Saint Joseph was married to Mary, mother of Jesus Christ and was Jesus’s legal father. Joseph is regarded as the patron saint of workers. Joseph is believed to have been a carpenter. After marrying Mary, Joseph found out that she was already pregnant and decided to divorce her quietly. An angel came to Joseph in his dreams and told him that the child that Mary carried was the son of God, conceived by the Holy Spirit. So Joseph  kept his wife.',
        originalPrice: '15000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product45',
        imageSrc: 'images/RARE VINTAGE PINK CANDLE STAND.jpg',
        name: 'RARE VINTAGE PINK CANDLE STAND',
        category: 'sport-cap',
        description: 'This majestic vintage candle stand, heavily inspired by Portuguese design is made  of wood and has been painted in fresh pink colour. This is from the churches in Goa.The intricate detailing on the candle and the ornamentation suggest that it must have been used as an altar candle. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.This rich wooden candle has a beautiful patterned base. This decorative candle stand will add a regal touch to your home decor. ',
        originalPrice: '12500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product46',
        imageSrc: 'images/VINTAGE MONSTRANCE.jpg',
        name: 'VINTAGE MONSTRANCE',
        category: 'sport-cap',
        description: 'This unique vintage collectible is an antique Christian Monstrance used in churches. It is made of metal and has a dual tone finish. This antique monstrance has the typical design of a portable monstrance – a sunburst at the centre with a cross on the top and a stand below. A unique feature of this monstrance is that it has a lotus base.A monstrance is a vessel used for public display of sacred objects or relics of saints and is usually carried by the priests. Monstrance was designed in both simple and elaborate designs, and some were even embedded with precious stones. The elaborate monstrances generally have a fixed design.',
        originalPrice: '20500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product47',
        imageSrc: 'images/PAIR OF VINTAGE GOLDEN CANDLE STANDS.jpg',
        name: 'PAIR OF VINTAGE GOLDEN CANDLE STANDS',
        category: 'sport-cap',
        description: 'These majestic vintage candle stands, heavily inspired by Portugese design are made  of wood and have been painted in gilded gold colour. These are from the churches in KeralaThe intricate detailing on the candles and the heavy ornamentation suggest that they might have been used as altar candles. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.These rich wooden candles have a beautiful patterned base. These decorative candle stands will add a regal touch to your home décor.  These can also be bought separately.',
        originalPrice: '44000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product48',
        imageSrc: 'images/POLYCHROME WOODEN IDOL OF ST. FRANCIS.jpg',
        name: 'POLYCHROME WOODEN IDOL OF ST. FRANCIS',
        category: 'sport-cap',
        description: 'These majestic vintage candle stands, heavily inspired by Portugese design are made  of wood and have been painted in gilded gold colour. These are from the churches in KeralaThe intricate detailing on the candles and the heavy ornamentation suggest that they might have been used as altar candles. Although modern day electric lighting has phased out candles, candle stands are still used in homes as  decorative elements  to add  vintage element to spaces.These rich wooden candles have a beautiful patterned base. These decorative candle stands will add a regal touch to your home décor.  These can also be bought separately.',
        originalPrice: '68000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product49',
        imageSrc: 'images/METAL FLOWERS.jpg',
        name: 'METAL FLOWERS',
        category: 'sport-cap',
        description: 'This beautiful and unique collectible is a table top decoration shaped as a bunch of three flowers, that shows clear European influenceThe art of moulding metal sheets into flowers and decorative objects by hand was a skill practised by artisans in the pastThis vintage curio can be used as a table top decoration or even as a flower vase. This beautiful piece makes a simple yet stunning statement.',
        originalPrice: '5500/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product50',
        imageSrc: 'images/CARVED PANEL WITH FLOWER MOTIF.jpg',
        name: 'CARVED PANEL WITH FLOWER MOTIF',
        category: 'sport-cap',
        description: 'This vintage  hand carved wooden panel is believed to be from Kerala. It is made of TeakwoodThe carving at the top and the flower in the centre is inspired by European art. The carving is an example of exquisite carving skills exhibited by Indian artists.This beautiful piece makes a simple yet stunning statement placed anywhere.',
        originalPrice: '5000/-',
        discountedPrice: '20000',
        discountPercentage: '7% OFF'
    }, {
        id: 'product51',
        imageSrc: 'images/SHIVA, PARVATI WITH GANESHA – RAJA RAVI VARMA.jpg',
        name: 'SHIVA, PARVATI WITH GANESHA – RAJA RAVI VARMA',
        category: 'prints-oleographs',
        description: 'This lovely Oleograph of Lord Shiva with his wife Parvati and son Ganesha is of one of Raja Ravi Varma’s paintings. It was Raja Ravi Varma who started painting Hindu deities with appropriate bodies, features and ornaments. This Oleograph depicts a Shiva in his domesticated form with his family. He is painted wearing royal robes, seated on a gilded throne in between his wife Parvati and son Ganesha. It is one of the unusual depictions of Shiva, in royalty.  Nandi which is Shiva’s mount is also shown sitting by their feet. Mount Kailash, Shiva’s abode is seen in the background.',
        originalPrice: '16000/-',
        discountedPrice: '16000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product52',
        imageSrc: 'images/THE BIRTH OF SHAKUNTALA – RAJA RAVI VARMA.jpg',
        name: 'THE BIRTH OF SHAKUNTALA – RAJA RAVI VARMA',
        category: 'prints-oleographs',
        description: 'This rare and beautiful Oleograph of Maharishi Vishwamitra and Menaka with baby Shakuntala is of one of Raja Ravi Varma’s paintings. Famously known as ‘The Birth of Shakuntala’, it was the first picture printed at Ravi Varma’s press. It was Raja Ravi Varma who started painting Hindu deities with appropriate bodies, features and ornaments. This particular picture shows enraged Vishwamitra unwilling to accept baby Shakuntala, born of Menaka. Sage Viswamitra was engaged in a great meditation to gain absolute power over Earth and Heaven. Lord Indra, who ruled over heaven got worried about his throne if Vishwamitra was to successfully complete his meditation.',
        originalPrice: '30000/-',
        discountedPrice: '30000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product53',
        imageSrc: 'images/DATTATREYA LITHOGRAPH – RAJA RAVI VARMA.jpg',
        name: 'DATTATREYA LITHOGRAPH – RAJA RAVI VARMA',
        category: 'prints-oleographs',
        description: 'This beautiful Oleograph of Lord Dattatreya is of one of Raja Ravi Varma’s paintings. It was Raja Ravi Varma who started painting Hindu deities with appropriate bodies, features and ornaments. Dattatreya is considered to be one of the lords of yoga and a combined avatar of Brahma, Vishnu and Shiva. He is one of the most ancient deities. He is typically depicted as a monk with three heads – one for each of Brahma, Vishnu and Shiva, six hands with each pair of hands holding a pair of objects associated with the trinity.  He is also shown with dogs or a cow. His dressed as a monk is symbolic of detachment of worldly objects and being a yogi.  Dattatreya is also believed to be the author of ‘Tripura Rahasya’ – a book on Advaita Vedanta which was given to Parashurama.',
        originalPrice: '16000/-',
        discountedPrice: '16000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product54',
        imageSrc: 'images/SARASWATI OLEOGRAPH – RAJA RAVI VARMA.jpg',
        name: 'SARASWATI OLEOGRAPH – RAJA RAVI VARMA',
        category: 'prints-oleographs',
        description: 'This beautiful Oleograph of Goddess Saraswati is of one of Raja Ravi Varma’s paintings. It was Raja Ravi Varma who started painting Hindu deities with appropriate bodies, features and ornaments. This Oleograph has been embellished with fabric and zari as saree and crown. Saraswati is the Hindu goddess of wisdom, knowledge and art. Saraswati along with Lakshmi and Parvati form the trinity of principal goddesses – Tridevi. As per popular Hindu iconography, Saraswati is depicted wearing a pure white saree sitting cross legged on a white lotus playing a musical instrument called the Veena. Peacock that is always shown by her side, is her mount.',
        originalPrice: '35000/-',
        discountedPrice: '35000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product55',
        imageSrc: 'images/LAKSHMI OLEOGRAPH – RAJA RAVI VARMA.jpg',
        name: 'LAKSHMI OLEOGRAPH – RAJA RAVI VARMA',
        category: 'prints-oleographs',
        description: 'This beautiful Oleograph of Goddess Lakshmi is of one of Raja Ravi Varma’s paintings. It was Raja Ravi Varma who started painting Hindu deities with appropriate bodies, features and ornaments. Lakshmi is the Hindu goddess of good fortune and wealth. She is the wife of Lord Vishnu and she was born out of churning of the ocean (Samudra manthan). As per popular Hindu iconography, Lakshmi is depicted wearing a red saree sitting or standing on a red lotus and is carrying a  lotus in one or both the hands. This particular print of Lakshmi is one of the most popular prints of Raja Ravi Varma.',
        originalPrice: '18000/-',
        discountedPrice: '18000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product56',
        imageSrc: 'images/EMBELLISHED VISHNU OLEOGRAPH.jpg',
        name: 'EMBELLISHED VISHNU OLEOGRAPH',
        category: 'prints-oleographs',
        description: 'This grand Oleograph is of Lord Vishnu by V.H. Pandya from his original painting made in 1920, published by Shree Vasudev Pictures Bombay, but this would have been reproduced in Germany. This Oleograph has been embellished with beautiful fabric and zari. As per Hindu Mythology, Lord Vishnu is revered as the Preserver of the universe and is one of the principal deities of Hindu Trinity along with Lord Shiva and Brahma.  Lakshmi, the goddess of good fortune is his consort. Vishnu as per Hindu iconography carries a Lotus, mace, conch and a discus (Sudarshana Chakra). Garuda, the king of birds is his mount.',
        originalPrice: '18000/-',
        discountedPrice: '18000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product57',
        imageSrc: 'images/VINTAGE METAL POT.jpg',
        name: 'VINTAGE METAL POT',
        category: 'kitchenware',
        description: 'This grand Oleograph is of Lord Vishnu by V.H. Pandya from his original painting made in 1920, published by Shree Vasudev Pictures Bombay, but this would have been reproduced in Germany. This Oleograph has been embellished with beautiful fabric and zari. As per Hindu Mythology, Lord Vishnu is revered as the Preserver of the universe and is one of the principal deities of Hindu Trinity along with Lord Shiva and Brahma.  Lakshmi, the goddess of good fortune is his consort. Vishnu as per Hindu iconography carries a Lotus, mace, conch and a discus (Sudarshana Chakra). Garuda, the king of birds is his mount.',
        originalPrice: '3200/-',
        discountedPrice: '3200/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product58',
        imageSrc: 'images/VINTAGE TIFFIN BOX WITH SPOONS.jpg',
        name: 'VINTAGE TIFFIN BOX WITH SPOONS',
        category: 'kitchenware',
        description: 'This three-tiered vintage tiffin box made of  brass is Maharashtra. The tiffin box has three unique-shaped containers that are held together by two long spoons, one on either side. A curved handle makes it convenient to carry this vintage brass tiffin box. The lids of the containers have delicate floral patterns.Decorate your kitchen, living room, or vintage-themed restaurant with such unique antique kitchen items available at The Antique Story.',
        originalPrice: '7000/-',
        discountedPrice: '7000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product58',
        imageSrc: 'images/VINTAGE SPOON HOLDER.jpg',
        name: 'VINTAGE SPOON HOLDER',
        category: 'kitchenware',
        description: 'This vintage spoon holder is great collectible, which is a  hand carved wooden spoon holder. It is believed to be from Kerala. This Portugese inspired spoon holder must have belonged to traditional kitchens in Kerala.This beautifully textured wooden spoon holder has been carved out of a single block of wood. It has a lattice pattern with a carved flower top and a decorated base.',
        originalPrice: '6000/-',
        discountedPrice: '6000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product59',
        imageSrc: 'images/VINTAGE TIFFIN BOX.jpg',
        name: 'VINTAGE TIFFIN BOX',
        category: 'kitchenware',
        description: 'The brass tiffin box is two tiered and has a lovely holder and locking mechanism.These were used to carry lunch to office or fields which were far from the villages. Usually one compartment is used to store breads and the other for vegetables or rice. The small box on the top is used to carry pickles. Tiffin carriers are generally made out of steel and sometimes of aluminium, but enamel and plastic versions were made by western companies.',
        originalPrice: '3000/-',
        discountedPrice: '3000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product60',
        imageSrc: 'images/GAJA LAKSHMI LAMP.jpg',
        name: 'GAJA LAKSHMI LAMP',
        category: 'kitchenware',
        description: 'Gaja lakshmi oil lamp (also called Devi Kamakshi lamp) in bronze with engraving of Goddess Lakshmi in the center flanked by two elephants (gaja) with an arch crowned by kirtimukha at the top. The base also depicts two swans with another kirtimukha and two dwarapalakas (guardians) on either side. Gaja Lakshmi sculptures are seen at the entrances of most temples in India. Considered as auspicious and a sign of new beginnings and good luck. These lamps are seen in every house in South India and are passed on from generation to generation. This lamp from Tamil Nadu is made using lost wax method.',
        originalPrice: '8000/-',
        discountedPrice: '8000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product61',
        imageSrc: 'images/ANTIQUE LASSI GLASS.jpg',
        name: 'ANTIQUE LASSI GLASS',
        category: 'kitchenware',
        description: 'This vintage lassi glass from Punjab is adorned with metallic embellishments which make it very ornamental. The antique glass has etching in a free hand pattern all over, which adds to its aesthetic value.Lassi is a popular curd-based drink which is a blend of curd, spices, water and fruit extracts (sometimes). It is usually served after a meal, though it can be consumed at any time of the day.Use this vintage lassi glass as a tabletop decoration or a unique vase in your living room or bedroom. It will also enhance your kitchen room interior design. You can find this vintage glass at The Antique Story. Browse our website for rare curios that you can use to decorate any space.',
        originalPrice: '1000/-',
        discountedPrice: '1000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product62',
        imageSrc: 'images/VINTAGE COCONUT GRATER.jpg',
        name: 'VINTAGE COCONUT GRATER',
        category: 'kitchenware',
        description: 'This beautiful and interesting collectible is a coconut grater, from Maharashtra. It is made out of a single block of wood. These kind of graters were also very widely used in South India.This vintage kitchenware is made in a very modern shape. It has two main parts – a seating part on a pedestal and the other side ending up in a bowl to collect the grated coconut. The pedestal for the raised platform is also carved out of the same single block of wood.',
        originalPrice: '1000/-',
        discountedPrice: '1000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product63',
        imageSrc: 'images/VINTAGE METAL BOX.jpg',
        name: 'VINTAGE METAL BOX',
        category: 'kitchenware',
        description: 'This unique collectible is a metal box that must have been used in the traditional kitchens of Gujarat to store various things.The brass box with very unique shape and self patterns on the lid is a great décor object for your outdoors.This vintage box can be used to store trinkets or just as an decorative object to enhance your home décor.',
        originalPrice: '3500/-',
        discountedPrice: '3500/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product64',
        imageSrc: 'images/VINTAGE WATER POT.jpg',
        name: 'VINTAGE WATER POT',
        category: 'kitchenware',
        description: 'This unique collectible is a metal pot from Rajasthan with motifs engraved on it.This uniquely shaped metal pot must have been used to store drinking water in the traditional households of Rajasthan. The top half of the water pot has carved patterns on it.This vintage water pot is a reminder of the beauty in everyday objects. It will be a charming addition to your living space. It can be used as a table top decoration or as a flower vase.',
        originalPrice: '3000/-',
        discountedPrice: '3000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product65',
        imageSrc: 'images/ANTIQUE WATER COOLER.jpg',
        name: 'ANTIQUE WATER COOLER',
        category: 'kitchenware',
        description: 'This unique collectible is an adorned water bottle.  This is from Punjab.The colourful ink-blue covering is a  canvas kind of material which on being sprinkled with water, keeps the water inside the bottle cold as the temperatures can be very high here in the summers.This antique water cooler can be used as a wall hanging or a table top to enhance your home décor.',
        originalPrice: '7000/-',
        discountedPrice: '7000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product66',
        imageSrc: 'images/KADUMANDAYA.jpg',
        name: 'KADUMANDAYA',
        category: 'folk-art',
        description: 'This collectible of a rider on a horse is Kadumandaya or Kodumandaya. Kadumandaya is the divine spirit or Daiyva of a male warrior and a cultural hero worshipped as a part of Bhuta Kola. Kadumandaya is shown wearing an elaborate Ani (the decorated structure that surrounds the waist of the rider) and Gaggara (the sacred anklets). His horse  is shown festively decorated  across its head and neck. This collectible has 2 parts – Kadumandaya is a detachable piece.',
        originalPrice: '55000/-',
        discountedPrice: '55000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product67',
        imageSrc: 'images/MIRROR GOD - KANNADI BIMBAM.jpg',
        name: 'MIRROR GOD - KANNADI BIMBAM',
        category: 'folk-art',
        description: 'This unique collectible is an adorned water bottle.  This is from Punjab.The colourful ink-blue covering is a  canvas kind of material which on being sprinkled with water, keeps the water inside the bottle cold as the temperatures can be very high here in the summers.This antique water cooler can be used as a wall hanging or a table top to enhance your home décor.',
        originalPrice: '50000/-',
        discountedPrice: '50000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product68',
        imageSrc: 'images/JUMADI MASK.jpg',
        name: 'JUMADI MASK',
        category: 'folk-art',
        description: 'This rare and ancient mask is a Bhuta mask, possibly a Jumadi. Jumadi is a divine spirit worshipped in Bhuta kola. Jumadi is usually represented in an androgynous form with a face of man and a body of a woman. As per Paddanas – the ancient Tulu oral literature, Lord Shiva and Goddess Parvati were on their way to kill a demon called Dhumasura who could only be killed by someone who is both a man and woman at the same time. On their way Parvati feels very hungry and Shiva offers her everything possible but in vain. In the end, he offers himself. Parvati absorbs the body of her husband till his head which gets stuck in her throat and remains out of her mouth, merging the two gods to become Jumadi.',
        originalPrice: '180000/-',
        discountedPrice: '180000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product69',
        imageSrc: 'images/GAJA LAKSHMI LAMP.jpg',
        name: 'GAJA LAKSHMI LAMP',
        category: 'folk-art',
        description: 'Gaja lakshmi oil lamp (also called Devi Kamakshi lamp) in bronze with engraving of Goddess Lakshmi in the center flanked by two elephants (gaja) with an arch crowned by kirtimukha at the top. The base also depicts two swans with another kirtimukha and two dwarapalakas (guardians) on either side. Gaja Lakshmi sculptures are seen at the entrances of most temples in India. Considered as auspicious and a sign of new beginnings and good luck. These lamps are seen in every house in South India and are passed on from generation to generation. This lamp from Tamil Nadu is made using lost wax method.',
        originalPrice: '8000/-',
        discountedPrice: '8000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product70',
        imageSrc: 'images/TEXTURED WOODEN OPIUM BOX.jpg',
        name: 'TEXTURED WOODEN OPIUM BOX',
        category: 'folk-art',
        description: 'This beautiful and very rare collectible is an antique opium box believed to be from Rajasthan. This vintage collectible was specifically used to store opium that was used to make opium teas. It is believed that in Rajasthan, opium teas were served during rituals and ceremonies, mainly to forge a bond. This ritual formed a very important part of the cultural fabric of life in those days.This handmade antique opium box with a lid is made of wood and features intricate pattern over. A small ring on the lid makes it easy to open and close the wooden opium box. This opium box will definitely add an ethnic charm to your home décor. You can also use this rare antique collectible to store your precious trinkets.',
        originalPrice: '1800/-',
        discountedPrice: '1800/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product71',
        imageSrc: 'images/BHUTA IDOL - DIETY ON PANJURLI.jpg',
        name: 'BHUTA IDOL - DIETY ON PANJURLI',
        category: 'folk-art',
        description: 'This vintage idol of a deity riding a wild boar is a Panjurli. Riding a boar, the deity here personifies the spirit of a Panjurli. Panjurli is the divine spirit of a male wild boar worshipped as a part of Bhuta Kola. Panjurli in Tulu means a wild boar offspring. As per Paddanas – the ancient Tulu oral literature, Goddess Parvati kept an offspring of a Wild boar as her pet and loved it dearly. It was very naughty and destroyed the gardens in Kailash. Lord Shiva angered by this, killed the Wild Boar. This upset Parvati greatly. To pacify her, Shiva brought it back to life as a spirit and sent it to Earth to protect the people and steer them from evil to good.',
        originalPrice: '68000/-',
        discountedPrice: '68000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product72',
        imageSrc: 'images/METAL ANKUSH.jpg',
        name: 'METAL ANKUSH',
        category: 'folk-art',
        description: 'This metal Ankush with a sharp iron goad is a vintage and rare collectible.Ankush is a tool which was used as an elephant goad in handling and training of elephants. It has a pointed hook usually made of bronze or steel and this is used as the main tool in handling the elephant.This goad also has auspicious importance in Hinduism and is thought to be one of the eight auspicious objects known as the Ashtamangala. Lord Ganesha is sometimes shown holding an ankush in his right upper arm. ',
        originalPrice: '15000/-',
        discountedPrice: '15000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product73',
        imageSrc: 'images/VINTAGE GRAIN BEATER.jpg',
        name: 'VINTAGE GRAIN BEATER',
        category: 'folk-art',
        description: 'This rare collectible is very unique. A grain beater used in Agriculture and is believed to be from Kerala. It is made of hard wood.Grain beaters were used to separate grains like rice, wheat from the husk and even tamarind seeds from the tamarind. This functional tool is now a vintage piece of art and will make for an interesting addition to your home décor.',
        originalPrice: '2000/-',
        discountedPrice: '2000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product74',
        imageSrc: 'images/PILICHAMUNDI IDOL.jpg',
        name: 'PILICHAMUNDI IDOL',
        category: 'folk-art',
        description: 'Bhuta Worship in the form of Bhuta Kola is celebrated in the Tululand (states of Southern coastal Karnataka like Mangalore, Udupi, Kundapura) and North Malabar region of Kerala and is very much a core part of the socio-cultural life in the village. Some believe the origin of Bhuta worship to be older than Hinduism itself.  A Bhuta is a divine ethereal spirit that is believed to protect and promote the welfare of its worshippers. The Bhuta kola attempts to bring together the tangible and the intangible worlds. There are at least 350 kinds of Bhutas which are classified either as those of totemic origin or derived from Hindu gods or human heroes who became saints after their death. Some believe these Bhutas to be from the sect of Ganas, followers and devotees of Lord Shiva.',
        originalPrice: '30000/-',
        discountedPrice: '30000/-',
        discountPercentage: '00% OFF'
    }, {
        id: 'product75',
        imageSrc: 'images/TRIBAL IDOL.jpg',
        name: 'TRIBAL IDOL',
        category: 'folk-art',
        description: 'This intricately cast collectible of a standing man holding a stick is from the coastal Karnataka and Kerala region. The man is depicted like a tribal with a long face, big eyes with elaborate head wear and fine ornaments. He is shown wearing necklaces, nose pin, amulets, earrings and anklets. His knee length dhoti also has carved patterns on it.There are priests who act as oracles or impersonators for the conveyance of the commands of these Bhutas.  Bhuta Kolas from feudal times have served as a platform for delivering justice where family disputes and political disputes are referred to the spirits for mediation and deliverance of justice. Possession, Trance and Dialogue by the impersonator with the villagers/ devotees are the three main parts of such ceremonies.',
        originalPrice: '35000/-',
        discountedPrice: '35000/-',
        discountPercentage: '00% OFF'
    }
    // Add more product objects here as needed
];

window.onload = function() {
    generateProductCards();
};

// Function to generate product cards dynamically
function generateProductCards() {
    var productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear existing content

    // Loop through the products array
    products.forEach(function(product) {
        var productCardHTML = `
    <div class="product-card" id="${product.id}">
        <img src="${product.imageSrc}" alt="${product.name}">
        <div class="overlay">
            <a href="#" class="icon add-to-cart" onclick="openModal('${product.id}')"><i class="fas fa-shopping-cart"></i></a>
            <a href="#" class="icon add-to-favorites"><i class="fas fa-heart"></i></a>
        </div>
        <div class="product-details">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="original-price">&#x20b9;${product.originalPrice}</span>
                <span class="discounted-price">&#x20b9;${product.discountedPrice}</span>
                <span class="discount-percentage">${product.discountPercentage}</span>
            </div>
        </div>
    </div>
`;
        // Append the generated HTML to the product container
        productContainer.innerHTML += productCardHTML;
    });
}

function openModal(productId) {

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });


    var modal = document.getElementById("myModal");
    var product = document.getElementById(productId);

    // var modalQuantity = modal.querySelector("#quantity");
    //modalQuantity.value = 1;

    console.log('Open modal for product: ' + productId);
    var product = products.find(function(item) {
        return item.id === productId;
    });

    // Select the modal and its elements
    var modal = document.getElementById('myModal');
    var modalProductImage = modal.querySelector('#modal-product-image');
    var modalProductName = modal.querySelector('.product-details h2');
    var modalProductDescription = modal.querySelector('.product-details p');
    var modalOriginalPrice = modal.querySelector('.original-price');
    var modalDiscountedPrice = modal.querySelector('.discounted-price');
    var modalDiscountPercentage = modal.querySelector('.discount-percentage');
    //var modalTotalPrice = modal.querySelector('#total-price');

    // Populate modal with product details
    modalProductImage.src = product.imageSrc;
    modalProductName.textContent = product.name;
    modalProductDescription.textContent = product.description;
    modalOriginalPrice.textContent = "Original Price: " + product.originalPrice;
    modalDiscountedPrice.textContent = "Discounted Price: " + product.discountedPrice;
    modalDiscountPercentage.textContent = "Discount Percentage: " + product.discountPercentage;
    // modalTotalPrice.textContent = "Total Price: " + product.discountedPrice;

    // Set quantity to 1
    // var quantity = 1;

    // Display the modal
    modal.style.display = 'block'

    var addToCartBtn = modal.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", function() {
        // Retrieve quantity

        const userDataCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userData='));

        // If userData cookie is not found, redirect the user to the login page
        if (!userDataCookie) {
            alert('You are not logged in.');
            window.location.href = 'login.html';
        }






        var quantity = 1 //parseInt(modal.querySelector("#quantity").value);

        console.log("Value of quantity for item is", quantity)
            // Retrieve existing cart items from session storage
        var existingCartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
        // Create new cart item object
        var newItem = {
            productName: modalProductName.textContent, // Extract text content
            productDescription: modalProductDescription.textContent, // Extract text content
            originalPrice: modalOriginalPrice.textContent, // Extract text content
            discountedPrice: modalDiscountedPrice.textContent, // Extract text content
            discountPercentage: modalDiscountPercentage.textContent, // Extract text content
            productImage: modalProductImage.src, // Extract source attribute
            quantity: quantity,
        };



        // Add new item to existing cart items
        existingCartItems.push(newItem);
        // Save updated cart items back to session storage
        sessionStorage.setItem("cartItems", JSON.stringify(existingCartItems));

        openCongratulatoryModal();



        // Close modal
        closeModal();
    });
}




//quantity
document.addEventListener("DOMContentLoaded", function() {
    var quantityInput = document.getElementById("quantity");
    var incrementBtn = document.getElementById("increment-btn");
    var decrementBtn = document.getElementById("decrement-btn");

    incrementBtn.addEventListener("click", function() {
        var currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
        calculateTotal();
    });

    decrementBtn.addEventListener("click", function() {
        var currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
        calculateTotal();
    });
});


function openCongratulatoryModal() {

    var congratsModal = document.getElementById("congratsModal");
    var congratsContent = document.getElementById("congratsContent");

    // Display the congratulatory modal
    congratsModal.style.display = "block";

    // Close the congratulatory modal after 3 seconds
    setTimeout(function() {
        congratsModal.style.display = "none";
    }, 5000);
}

function closeCongratsModal() {
    var congratsModal = document.getElementById("congratsModal");
    congratsModal.style.display = "none";

}
// Function to close the modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Clear browser storage
    localStorage.removeItem("modalData");


}

// Function to calculate total price based on quantity
function calculateTotal() {
    var quantity = parseInt(document.getElementById("quantity").value);
    var discountedPriceText = document.querySelector("#myModal .discounted-price").textContent;
    var discountedPrice = parseFloat(discountedPriceText.replace("&#x20b9; ", "")); // Remove rupee symbol
    var totalPrice = quantity * discountedPrice;
    document.getElementById("total-price").textContent = "₹" + totalPrice.toFixed(2); // Display rupee symbol
}

document.getElementById("quantity").addEventListener("input", calculateTotal());

document.addEventListener("DOMContentLoaded", function() {
    displayCartItems();
    var modalData = JSON.parse(localStorage.getItem("modalData"));

    // Check if modalData exists
    if (modalData) {
        console.log("modalData exists:", modalData);
        // You can display modalData on the page if needed
    } else {
        console.log("modalData does not exist.");
    }
});

function displayCartItems() {
    var cartItemsContainer = document.getElementById("cart-items-container");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    // Retrieve modalData from session storage
    var modalData = JSON.parse(sessionStorage.getItem("modalData"));

    if (modalData) {
        var cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");

        // Create elements to display product information
        var img = document.createElement("img");
        img.src = modalData.productImage;

        var itemInfoDiv = document.createElement("div");
        itemInfoDiv.classList.add("cart-item-info");

        var h2 = document.createElement("h2");
        h2.textContent = modalData.productName;

        var pDescription = document.createElement("p");
        pDescription.textContent = modalData.productDescription;

        var pPrice = document.createElement("p");
        pPrice.classList.add("cart-item-price");
        pPrice.textContent = "Price: " + modalData.discountedPrice;

        // Append elements to cart item container
        itemInfoDiv.appendChild(h2);
        itemInfoDiv.appendChild(pDescription);
        itemInfoDiv.appendChild(pPrice);

        cartItemDiv.appendChild(img);
        cartItemDiv.appendChild(itemInfoDiv);

        cartItemsContainer.appendChild(cartItemDiv);
    }
}
/*
// Function to filter products based on search keyword
function filterProducts(keyword) {
    return products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

// Function to filter products based on selected categories
function filterByCategory(selectedCategories) {
    console.log(selectedCategories)
    if (selectedCategories.length === 0) {
        return products; // Return all products if no category is selected
    }
    return products.filter(product =>
        selectedCategories.includes(product.category)
    );
}

// Function to filter products based on selected price ranges
function filterByPrice(selectedPriceRanges) {
    if (selectedPriceRanges.length === 0) {
        return products; // Return all products if no price range is selected
    }
    return products.filter(product => {
        return selectedPriceRanges.some(range => {
            const [minRange, maxRange] = range.split('-');
            return parseInt(product.discountedPrice) >= parseInt(minRange) &&
                parseInt(product.discountedPrice) <= parseInt(maxRange);
        });
    });
}
*/
// Function to apply all filters and update product display
function applyFilters() {
    const searchKeyword = document.getElementById('search-input').value;
    console.log(searchKeyword)
    const selectedCategories = Array.from(document.querySelectorAll('input[name="category"]:checked')).map(checkbox => checkbox.value);
    const selectedPriceRanges = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(checkbox => checkbox.value);
    const filteredProducts = products.filter(product => {
        const productNameLowercase = product.name.toLowerCase();

        // Check if the lowercase product name contains the lowercase search keyword
        const matchesKeyword = productNameLowercase.includes(searchKeyword);

        // Check if the product's category is one of the selected categories
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);

        // Check if the product's price falls within any of the selected price ranges
        const matchesPriceRange = selectedPriceRanges.length === 0 || selectedPriceRanges.some(range => {
            const [minRange, maxRange] = range.split('-');
            const discountedPrice = parseInt(product.discountedPrice);
            return discountedPrice >= parseInt(minRange) && discountedPrice <= parseInt(maxRange);
        });

        // Return true only if all conditions are met
        return matchesKeyword && matchesCategory && matchesPriceRange;
    });

    // Update product display with filtered products
    displayFilteredProducts(filteredProducts);
}

document.getElementById('search-input').addEventListener('input', function() {
    applyFilters();
});

// Function to display filtered products
function displayFilteredProducts(filteredProducts) {
    var productContainer = document.getElementById('productContainer');
    productContainer.innerHTML = ''; // Clear existing content

    // Initialize an empty string to accumulate HTML
    var productHTML = '';

    // Loop through the filtered products array
    filteredProducts.forEach(function(product) {
        var productCardHTML = `
            <div class="product-card" id="${product.id}">
                <img src="${product.imageSrc}" alt="${product.name}">
                <div class="overlay">
                    <a href="#" class="icon add-to-cart" onclick="openModal('${product.id}')"><i class="fas fa-shopping-cart"></i></a>
                    <a href="#" class="icon add-to-favorites"><i class="fas fa-heart"></i></a>
                </div>
                <div class="product-details">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                    <div class="product-price">
                        <span class="original-price">&#x20b9;${product.originalPrice}</span>
                        <span class="discounted-price">&#x20b9;${product.discountedPrice}</span>
                        <span class="discount-percentage">${product.discountPercentage}</span>
                    </div>
                </div>
            </div>
        `;
        // Append the generated HTML to the accumulated string
        productHTML += productCardHTML;
    });

    // Set the accumulated HTML to the product container
    productContainer.innerHTML = productHTML;
}

// Event listener for search button click
document.getElementById('search-btn').addEventListener('click', function() {
    applyFilters();
});

// Event listener for category and price range checkboxes
document.querySelectorAll('input[name="category"], input[name="price"]').forEach(checkbox => {
    checkbox.addEventListener('change', applyFilters);
});
const toggleBtn = document.querySelector('.toggle-btn');
const navUL = document.querySelector('nav ul');

/* Signup info*/

