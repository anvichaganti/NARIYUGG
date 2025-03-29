// Verify phone number
function verifyNumber() {
    const phoneNumber = document.getElementById("phoneNumber").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (phoneNumber.length === 10) {
      window.location.href = "language.html"; 
    } else {
      errorMessage.textContent = "❌Invalid number. Please enter again."; 
    }
  }
  
  // Save language and redirect
  function selectLanguage() {
    const language = document.getElementById("language").value;
    const errorMessage = document.getElementById("errorMessage");
  
    if (language) {
      localStorage.setItem("selectedLanguage", language);
      window.location.href = "details.html"; 
    } else {
      errorMessage.textContent = "Please select a language to continue.";
    }
  }
  
  // Load form labels based on selected language
  document.addEventListener("DOMContentLoaded", () => {
    const selectedLanguage = localStorage.getItem("selectedLanguage");
  
    const translations = {
      english: {
        title: "Enter Your Personal Details",
        name: "Full Name",
        email: "Email",
        experience: "Years of Experience",
        button: "Submit",
        city: "City"
      },
      hindi: {
        title: "अपने व्यक्तिगत विवरण दर्ज करें",
        name: "पूरा नाम",
        email: "ईमेल",
        experience: "अनुभव के वर्ष",
        button: "सबमिट",
        city: "शहर"
      },
      bengali: {
        title: "আপনার ব্যক্তিগত বিবরণ লিখুন",
        name: "সম্পূর্ণ নাম",
        email: "ইমেল",
        experience: "অভিজ্ঞতার বছর",
        button: "জমা দিন",
        city: "শহর"
      },
      tamil: {
        title: "உங்கள் தனிப்பட்ட விவரங்களை உள்ளிடவும்",
        name: "முழு பெயர்",
        email: "மின்னஞ்சல்",
        experience: "அனுபவ ஆண்டுகள்",
        button: "சமர்ப்பிக்கவும்",
        city:"நகரம்"
      },
      telugu: {
        title: "మీ వ్యక్తిగత వివరాలను నమోదు చేయండి",
        name: "పూర్తి పేరు",
        email: "ఇమెయిల్",
        experience: "అనుభవ సంవత్సరాలు",
        button: "సమర్పించండి" , 
        city:"నగరం"
        
      },
      marathi: {
        title: "तुमची वैयक्तिक माहिती भरा",
        name: "पूर्ण नाव",
        email: "ईमेल",
        experience: "अनुभवाचे वर्ष",
        button: "सबमिट करा",
        city:"शहर"
        
      }
    };
  
    if (selectedLanguage && translations[selectedLanguage]) {
      const lang = translations[selectedLanguage];
      document.getElementById("title").textContent = lang.title;
      document.getElementById("name").placeholder = lang.name;
      document.getElementById("email").placeholder = lang.email;
      document.getElementById("experience").placeholder = lang.experience;
      document.getElementById("city").placeholder = lang.city;
      document.querySelector("button").textContent = lang.button;
    }
  });
  
  function submitDetails() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;
    const city = document.getElementById("city").value;
  
    if (name && email && experience && city) {
      alert("Details submitted successfully!");
      window.location.href = "main.html";
    } else {
      document.getElementById("errorMessage").textContent = "Please fill all fields.";
    }
  }
  
  function openB2B() {
    alert("B2B contact page will open (dummy)");
  }
  
  function openHotel() {
    alert("Hotel connection page will open (dummy)");
  }
