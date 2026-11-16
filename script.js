// Button 1 on Home Page: Save the Date alert
function saveTheDate() {
  window.alert("Reminder saved! Don't forget the Party Core Birthday Celebration on Friday, 21st at 6:30 PM.");
  console.log("User clicked Save the Date.");
}

// Button 2 on Menu Page: Dietary info alert
function dietaryNote() {
  window.alert("All chicken dishes are Halal. Vegetarian options include Mango Salad, Rolls, Chocolate Pudding, Rasmalai, and Cake!");
  console.log("User checked dietary information.");
}

// Form Button on RSVP Page: Confirmation alert & console log
function submitRSVP(event) {
  event.preventDefault(); // Prevents the page from refreshing

  let name = document.getElementById("guestName").value;
  let guests = document.getElementById("guestCount").value;
  let status = document.getElementById("attending").value;

  console.log("New RSVP Received:", { name: name, guests: guests, status: status });
  window.alert("Thank you, " + name + "! Your RSVP (" + status + " for " + guests + " guest(s)) has been recorded.");
}