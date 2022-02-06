export const initialState = {
    user: undefined,
    institutions: [
        {
            "id":453,
            "name":"IIT Home",
            "address":"Plot No. 450, CA Road, Ramdaspeth-440001",
            "city": "Nagpur",
            "courses":['KVPY','JEE','OLYMPIAD','NEET','HRPC','IAS']
        },
        {
            "id":553,
            "name":"Resonance",
            "address":"Plot No. 678, Wing A, Vikram Nagar-440001",
            "city": "Ahmedabad",
            "courses":['KVPY','JEE','OLYMPIAD','NEET','HRPC','IAS']
        },
        {
            "id":653,
            "name":"IIT Home",
            "address":"Plot No. 450, Godrej Society, Q-rak Nagar-440042",
            "city": "Lucknow",
            "courses":['KVPY','JEE','OLYMPIAD','NEET','HRPC','IAS']
        },
        {
            "id":753,
            "name":"ICAD",
            "address":"Plot No. 600, Wingspan, Manish Nagar-440452",
            "city": "Gurgoan",
            "courses":['KVPY','JEE','OLYMPIAD','NEET','HRPC','IAS']
        },
        {
            "id":853,
            "name":"Career Burst",
            "address":"Plot No. 56-0, Cross Round, Sagar Nagar-273601",
            "city": "Varanasi",
            "courses":['KVPY','JEE','CAT','NEET','VIT','IAS']
        },
        {
            "id":953,
            "name":"Menon Education ",
            "address":"Plot No. 450, Kingsway, Kohli Nagar-590001",
            "city" : "Bangalore",
            "courses":['CSER','MAT','GRE','CAT','GATE','PEN']
        },
    ],
    "review": [
        {
            "user":"Jai Bansal",
            "institution-id":"453",
            "review": "I am also in the same plan"
        },
        {
            "user":"Aisha Adani",
            "institution-id":"453",
            "review": "This is an truly amazing earbud. It has very Good Quality Sound and Awesome   Features    that other earbuds dont have. 13mm speaker driver for the first time i ever seen in any tws earbuds, most of buds comes   with less than    10mm speaker driver, and because o"
        },
        {
            "user":"Manish VeerKumar",
            "institution-id":"453",
            "review": "This i. It has very Good Quas with less than 10mm speaker driver, and because o lorem"
        },
        {
            "user":"Jai Bansal",
            "institution-id":"453",
            "review": "Qzengo in the viston year"
        },
        {
            "user":"Jai Bansal",
            "institution-id":"453",
            "review": "This is an truly amazing earbud. It has very Good Quality Sound and Awesome   Features    that other earbuds dont have. 13mm speaker driver for the first time i ever seen in any tws earbuds, most of buds comes   with less than    10mm speaker driver, and because of this 13m"
        },
        {
            "user":"Jai Bansal",
            "institution-id":"453",
            "review": "r for the first time i ever seen in any tws earbuds, most of buds comes   with less than    10mm speaker driver, and because of this 13m"
        },
        {
            "user":"Jai Bansal",
            "institution-id":"453",
            "review": "Its better than ICAD than career burst as we are targeting toppers only"
        },
    ]
}

const reducer = (state,action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            } 
        case 'ADD_REVIEW':
            return {
                ...state,
                review: [action.review,...state.review]
            }    
        default: 
            return state;    
    }
};

export default reducer;