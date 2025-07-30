import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Ayesha Khan",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=faces&fit=crop&w=200&h=200",
    quote: "TaskFlow has transformed how I manage my daily schedule. I feel more in control!"
  },
  {
    name: "Ali Raza",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?crop=faces&fit=crop&w=200&h=200",
    quote: "It's simple, clean, and powerful. I love the reminders and smooth interface."
  },
  {
    name: "Sara Naveed",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922561.png",
    quote: "As a student, TaskFlow keeps me focused and less stressed. Highly recommend!"
  }
];




const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2 className="testimonial-title">What Our Users Say</h2>
      <div className="testimonial-container">
        {testimonials.map((user, index) => (
          <div key={index} className="testimonial-card">
            <img src={user.image} alt={user.name} className="user-img" />
            <h4>{user.name}</h4>
            <p>"{user.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
