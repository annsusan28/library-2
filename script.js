//document.addEventListener("DOMContentLoaded", function() {
   // document.getElementById("bookIssueForm")?.addEventListener("submit", function(event) {
       // const bookName = document.getElementById("bookName")?.value;
       // if (!bookName) {
      //      alert("Please enter the book name.");
      //      event.preventDefault();
     //   }
  //  });

   // document.getElementById("membershipDuration")?.value = "6 months";

   // document.getElementById("returnBookForm")?.addEventListener("submit", function(event) {
      //  const finePaid = document.getElementById("finePaid")?.checked;
      //  const fineAmount = parseFloat(document.getElementById("fineAmount")?.value || "0");
        
       // if (fineAmount > 0 && !finePaid) {
      //      alert("Please pay the fine before returning the book.");
       //     event.preventDefault();
      //  }
   // });
// });
// Tab switching logic
function openLogin(evt, loginType) {
    let i, tabcontent, tablinks;
    
    // Hide all tabcontent
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove the active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the current tab and add an "active" class
    document.getElementById(loginType).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default open the User tab
document.getElementById("defaultOpen").click();


// JavaScript for page navigation and role-based redirects

function goHome() {
    // Assume "role" is defined based on session data or other authentication method
    const role = localStorage.getItem("role"); // Example using local storage; update as needed

    if (role === "admin") {
        window.location.href = 'admin_home.html';
    } else {
        window.location.href = 'user_home.html';
    }
}

function logout() {
    // Clear session or local storage and redirect to login page
    localStorage.removeItem("role"); // Assuming role is stored here
    window.location.href = 'login.html';
}

// Simulate login function for testing (example only)
function loginAs(role) {
    localStorage.setItem("role", role);
    goHome();
}
