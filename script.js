// script.js

const qaBank = {
  // General Info
  "what is vit ap": "VIT-AP is a deemed university located in Amaravati, Andhra Pradesh. It's part of the Vellore Institute of Technology group.",
  "location": "VIT-AP is located in Amaravati, Andhra Pradesh, near Vijayawada.",
  "contact": "Call +91-863-2370444 or email info@vitap.ac.in.",
  "working hours": "9:00 AM to 5:00 PM, Monday to Saturday.",
  "ugc approved": "Yes, VIT-AP is approved by the UGC.",
  "ranking": "VIT-AP follows the legacy of VIT Vellore which is NIRF ranked.",

  // Admissions
  "admission process": "Admissions are through VITEEE for B.Tech and merit-based for other courses. Visit vitap.ac.in for details.",
  "viteee": "VITEEE is VIT Engineering Entrance Exam, conducted annually for B.Tech admissions.",
  "eligibility": "For B.Tech, a minimum of 60% in PCM (10+2) is required. Relaxation available for reserved categories.",
  "mba mtech": "Admissions for MBA and M.Tech are through merit/interviews.",
  "important dates": "VITEEE usually opens in Nov-Dec and closes in April. Check vitap.ac.in for current schedule.",
  "fee structure": "Fee varies by course. Approx B.Tech annual fee: ₹1.95–2.5 lakh.",
  "apply scholarship": "Scholarship applications are processed at the time of admission.",

  // Courses & Academics
  "courses offered": "VIT-AP offers B.Tech, BBA, B.Com, M.Tech, MBA, Ph.D, and Law programs.",
  "btech branches": "CSE, ECE, Mechanical, Data Science, AI & ML, Cyber Security, and more.",
  "credit system": "Yes, VIT-AP follows a fully flexible credit system (FFCS).",
  "academic calendar": "The academic year is divided into two semesters.",
  "semester system": "VIT-AP follows a semester system with continuous internal evaluation.",
  "exam pattern": "Internal assessments + end semester exams make up the grading.",
  "grading system": "CGPA out of 10 is followed.",
  "arrears": "If a student fails, re-exams or summer terms are available.",

  // Departments & Faculty
  "departments": "CSE, ECE, Mechanical, Sciences, Management, Law, Humanities.",
  "faculty": "The faculty are highly qualified with PhDs and industry experience.",
  "foreign faculty": "Yes, VIT-AP has visiting faculty from international universities.",
  "hod cse": "Dr. XYZ is the HOD of the CSE department.",

  // Campus Life
  "hostel": "Separate hostels for boys and girls with AC and non-AC options.",
  "wifi": "Yes, campus-wide high-speed Wi-Fi is available.",
  "sports": "Cricket ground, basketball courts, gym, indoor games, and more.",
  "library": "Yes, a digital and physical library is available with thousands of resources.",
  "canteen": "Multiple food courts and cafes serve vegetarian and non-vegetarian food.",
  "medical": "Medical facility with ambulance, nurse, and on-call doctor is available 24/7.",

  // Placements
  "placement companies": "TCS, Infosys, Cognizant, Amazon, Deloitte, and more visit the campus.",
  "highest package": "The highest package in recent years has crossed ₹30 LPA.",
  "placement cell": "Yes, a dedicated Career Development Center (CDC) handles placements.",
  "internships available": "Yes, internships are facilitated through CDC and alumni connections.",

  // Student Life & Services
  "clubs": "Tech clubs, dance, music, drama, coding, literature, and many more.",
  "events": "VITopia is the annual cultural fest. Tech events include Hackathons, Codeathons.",
  "ragging": "Ragging is strictly banned and punishable as per UGC norms.",
  "student culture": "A healthy mix of academics and extracurriculars, with a diverse student community.",
  "how to reach": "VIT-AP is 25 km from Vijayawada. Taxis, buses, and college transport are available.",
  "bus service": "Yes, the university runs bus services from nearby cities.",
  "nearest station": "Vijayawada Railway Station and Gannavaram Airport are the closest.",

  // Help & Support
  "pay fees": "Fees can be paid online via the VIT student portal.",
  "scholarship": "Scholarships are available based on merit and VITEEE rank.",
  "admission office": "You can reach the admission office at +91-863-2370444.",
  "bonafide certificate": "Request it through your student portal or academics department.",
  "hostel issues": "Contact the hostel warden or use the student grievance portal.",
  "grievance": "VIT-AP has an online grievance redressal system accessible via the portal."
};

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.toLowerCase().trim();
  if (message === "") return;

  appendMessage("user", message);
  input.value = "";

  let reply = "🤖 Sorry, I couldn't find that info.";
  for (let key in qaBank) {
    if (message.includes(key)) {
      reply = qaBank[key];
      break;
    }
  }

  setTimeout(() => {
    appendMessage("bot", reply);
  }, 500);
}

function appendMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const messageDiv = document.createElement("div");
  messageDiv.className = sender;
  messageDiv.innerText = text;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight;
}