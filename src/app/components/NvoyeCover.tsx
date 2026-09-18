import { CalendarDays, Compass, Home, MessageCircle, Users } from "lucide-react";
import brandHeader from "../../imports/nvoye-brand-header.png";
import dashboardScreen from "../../imports/nvoye-dashboard-cover.png";
import "../../styles/nvoye-cover.css";

const events = [
  { title: "Potluck in the Park", category: "Meet your community", date: "04 MAY", position: "23% 31%" },
  { title: "Diplomacy & Drones", category: "Learn something new", date: "10 MAY", position: "58% 31%" },
  { title: "Stories Behind the Souvenirs", category: "Share your culture", date: "18 MAY", position: "93% 31%" },
];

// Editorial dashboard preview built from the existing community content.
export default function NvoyeCover() {
  return (
    <div className="nvoye-cover" role="img" aria-label="Nvoye dashboard concept showing community events and member connections in a black desktop display">
      <div className="nvoye-device" aria-hidden="true">
        <div className="nvoye-device-screen">
          <div className="nvoye-dashboard">
            <aside className="nvoye-sidebar">
              <span className="nvoye-brand" style={{ backgroundImage: `url(${brandHeader})` }} />
              <span className="nvoye-nav-active"><Home />Overview</span>
              <span><Compass />Discover</span>
              <span><Users />People</span>
              <span><CalendarDays />Events</span>
              <span><MessageCircle />Messages</span>
              <small>Your world, connected.</small>
            </aside>
            <div className="nvoye-dashboard-main">
              <div className="nvoye-dashboard-top"><span>YOUR COMMUNITY</span><span>The Hague, Netherlands</span></div>
              <h3>A world of connections.</h3>
              <p>Meet people. Share perspectives. Feel at home.</p>
              <div className="nvoye-section-label"><strong>Discover what’s happening</strong><span>All events ↗</span></div>
              <div className="nvoye-event-grid">
                {events.map(event => (
                  <div className="nvoye-event" key={event.title}>
                    <div className="nvoye-event-photo" style={{ backgroundImage: `url(${dashboardScreen})`, backgroundPosition: event.position }}><span>{event.date}</span></div>
                    <div className="nvoye-event-copy"><small>{event.category}</small><strong>{event.title}</strong><span>Explore event ↗</span></div>
                  </div>
                ))}
              </div>
              <div className="nvoye-community-strip">
                <div className="nvoye-member-images">
                  {["22%", "55%", "90%"].map(position => <span key={position} style={{ backgroundImage: `url(${dashboardScreen})`, backgroundPosition: `${position} 100%` }} />)}
                </div>
                <div><strong>Your next connection is here.</strong><span>Discover the people in your community.</span></div>
                <b>Meet the community ↗</b>
              </div>
            </div>
          </div>
        </div>
        <div className="nvoye-monitor-stand" />
      </div>
    </div>
  );
}
