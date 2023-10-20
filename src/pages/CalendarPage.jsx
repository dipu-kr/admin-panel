import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarPage = () => {
  const [view, setView] = useState("dayGridMonth");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);
  console.log(events);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  // ----------functions------------
  const handleDateClick = (arg) => {
    setSelectedDate(arg.date);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setEventName("");
    setEventDescription("");
    setSelectedEvent(null);
  };

  const handleCreateEvent = () => {
    const newEvent = {
      title: eventName,
      description: eventDescription,
      start: selectedDate,
    };

    // Add the event to the calendar
    setEvents([...events, newEvent]);

    // Close the dialog
    handleDialogClose();
    setSelectedDate(null);
    setEventName("");
    setEventDescription("");
  };

  const handleEventClick = (arg) => {
    setSelectedEvent(arg.event);
    setIsDialogOpen(true);
  };

  useEffect(() => {
    if (hoveredEvent) {
      const eventElement = document.querySelector(
        `.fc-event-title[data-goto="${hoveredEvent.id}"]`
      );
      if (eventElement) {
        eventElement.addEventListener("mouseenter", handleEventMouseEnter);
        eventElement.addEventListener("mouseleave", handleEventMouseLeave);
      }
    }

    return () => {
      if (hoveredEvent) {
        const eventElement = document.querySelector(
          `.fc-event-title[data-goto="${hoveredEvent.id}"]`
        );
        if (eventElement) {
          eventElement.removeEventListener("mouseenter", handleEventMouseEnter);
          eventElement.removeEventListener("mouseleave", handleEventMouseLeave);
        }
      }
    };
  }, [hoveredEvent]);

  const handleEventMouseEnter = () => {
    setIsDialogOpen(true);
  };

  const handleEventMouseLeave = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="w-full max-h-[calc(100vh-38px-8px-8px-20px)] mt-5 calendar_class">
      <div className="w-full max-h-[calc(100vh-38px-8px-8px-20px)] text-white">
        <div>
          <Button onClick={() => setView("dayGridDay")}>Day</Button>
          <Button onClick={() => setView("dayGridWeek")}>Week</Button>
          <Button onClick={() => setView("dayGridMonth")}>Month</Button>
        </div>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            listPlugin,
            interactionPlugin,
          ]}
          initialView={view}
          dateClick={handleDateClick}
          events={events}
          eventClick={handleEventClick}
        />
        {/* <Dialog open={isDialogOpen}>
          <DialogTitle>Create Event</DialogTitle>
          <DialogContent>
            <form>
              <TextField
                label="Event Name"
                fullWidth
                style={{ marginTop: "10px", marginBottom: "18px" }}
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
              />
              <TextField
                label="Event Description"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                fullWidth
              />
            </form>
          </DialogContent>

          <DialogActions
            className="mx-4"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={handleDialogClose}
              variant="outlined"
              color="error"
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              color="success"
              onClick={handleCreateEvent}
            >
              Create Event
            </Button>
          </DialogActions>
        </Dialog> */}
        {isDialogOpen && (
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
            <DialogTitle>
              {selectedEvent ? selectedEvent.title : "Create Event"}
            </DialogTitle>
            <DialogContent>
              {selectedEvent ? (
                <div className="min-w-[250px]">
                  {/* <Typography variant="subtitle1">
                    Event Description:
                  </Typography> */}
                  <Typography variant="body1">
                    {selectedEvent.extendedProps.description}
                  </Typography>
                </div>
              ) : (
                <form>
                  <TextField
                    label="Event Name"
                    fullWidth
                    style={{ marginTop: "10px", marginBottom: "18px" }}
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                  />
                  <TextField
                    label="Event Description"
                    fullWidth
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                  />
                </form>
              )}
            </DialogContent>
            <DialogActions className="mx-4 border-2 flex justify-between">
              <Button
                onClick={handleDialogClose}
                variant="outlined"
                color="error"
              >
                Cancel
              </Button>
              {selectedEvent ? null : (
                <Button
                  variant="outlined"
                  color="success"
                  onClick={handleCreateEvent}
                >
                  Create Event
                </Button>
              )}
            </DialogActions>
          </Dialog>
        )}
      </div>
    </div>
  );
};

export default CalendarPage;
