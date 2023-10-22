// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Typography,
//   Button,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
// } from "@mui/material";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import listPlugin from "@fullcalendar/list";
// import interactionPlugin from "@fullcalendar/interaction";
// ----------------------------------new code---------------------
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

const CalendarPage = () => {
  // const [view, setView] = useState("dayGridMonth");
  // const [isDialogOpen, setIsDialogOpen] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [eventName, setEventName] = useState("");
  // const [eventDescription, setEventDescription] = useState("");
  // const [events, setEvents] = useState([]);

  // const [hoveredEvent, setHoveredEvent] = useState(null);
  // const [selectedEvent, setSelectedEvent] = useState(null);
  // ----------functions------------
  // const handleDateClick = (arg) => {
  //   setSelectedDate(arg.date);
  //   setIsDialogOpen(true);
  // };

  // const handleDialogClose = () => {
  //   setIsDialogOpen(false);
  //   setEventName("");
  //   setEventDescription("");
  //   setSelectedEvent(null);
  // };

  // const handleCreateEvent = () => {
  //   const newEvent = {
  //     title: eventName,
  //     description: eventDescription,
  //     start: selectedDate,
  //   };

  //   setEvents([...events, newEvent]);
  //   handleDialogClose();
  //   setSelectedDate(null);
  //   setEventName("");
  //   setEventDescription("");
  // };

  // const handleEventClick = (arg) => {
  //   setSelectedEvent(arg.event);
  //   setIsDialogOpen(true);
  // };

  // useEffect(() => {
  //   if (hoveredEvent) {
  //     const eventElement = document.querySelector(
  //       `.fc-event-title[data-goto="${hoveredEvent.id}"]`
  //     );
  //     if (eventElement) {
  //       eventElement.addEventListener("mouseenter", handleEventMouseEnter);
  //       eventElement.addEventListener("mouseleave", handleEventMouseLeave);
  //     }
  //   }

  //   return () => {
  //     if (hoveredEvent) {
  //       const eventElement = document.querySelector(
  //         `.fc-event-title[data-goto="${hoveredEvent.id}"]`
  //       );
  //       if (eventElement) {
  //         eventElement.removeEventListener("mouseenter", handleEventMouseEnter);
  //         eventElement.removeEventListener("mouseleave", handleEventMouseLeave);
  //       }
  //     }
  //   };
  // }, [hoveredEvent]);

  // const handleEventMouseEnter = () => {
  //   setIsDialogOpen(true);
  // };

  // const handleEventMouseLeave = () => {
  //   setIsDialogOpen(false);
  // };
  // -------------------new code---------------------
  const [currentEvents, setCurrentEvents] = useState([]);

  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    // <div className="w-full max-h-[calc(100vh-38px-8px-8px-20px)] mt-5 calendar_class">
    //   <div className="w-full max-h-[calc(100vh-38px-8px-8px-20px)] text-white">
    //     <div>
    //       <Button onClick={() => setView("dayGridDay")}>Day</Button>
    //       <Button onClick={() => setView("dayGridWeek")}>Week</Button>
    //       <Button onClick={() => setView("dayGridMonth")}>Month</Button>
    //     </div>
    //     <FullCalendar
    //       plugins={[
    //         dayGridPlugin,
    //         timeGridPlugin,
    //         listPlugin,
    //         interactionPlugin,
    //       ]}
    //       initialView={view}
    //       dateClick={handleDateClick}
    //       events={events}
    //       eventClick={handleEventClick}
    //     />

    //     {isDialogOpen && (
    //       <Dialog open={isDialogOpen}>
    //         <DialogTitle>
    //           {selectedEvent ? selectedEvent.title : "Create Event"}
    //         </DialogTitle>
    //         <DialogContent>
    //           {selectedEvent ? (
    //             <div className="min-w-[250px]">
    //               <Typography variant="body1">
    //                 {selectedEvent.extendedProps.description}
    //               </Typography>
    //             </div>
    //           ) : (
    //             <form>
    //               <TextField
    //                 label="Event Name"
    //                 fullWidth
    //                 style={{ marginTop: "10px", marginBottom: "18px" }}
    //                 value={eventName}
    //                 onChange={(e) => setEventName(e.target.value)}
    //               />
    //               <TextField
    //                 label="Event Description"
    //                 fullWidth
    //                 value={eventDescription}
    //                 onChange={(e) => setEventDescription(e.target.value)}
    //               />
    //             </form>
    //           )}
    //         </DialogContent>
    //         <DialogActions className="mx-4 flex justify-between">
    //           <Button
    //             onClick={handleDialogClose}
    //             variant="outlined"
    //             color="error"
    //           >
    //             Cancel
    //           </Button>
    //           {selectedEvent ? null : (
    //             <Button
    //               variant="outlined"
    //               color="success"
    //               onClick={handleCreateEvent}
    //             >
    //               Create Event
    //             </Button>
    //           )}
    //         </DialogActions>
    //       </Dialog>
    //     )}
    //   </div>
    // </div>
    // --------------------------------------------------------------
    <Box m="20px">
      {/* <Header title="Calendar" subtitle="Full Calendar Interactive Page" /> */}

      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        <Box flex="1 1 20%" backgroundColor="gray" p="15px" borderRadius="4px">
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: "green",
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {/* {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })} */}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* CALENDAR */}
        <Box flex="1 1 100%" ml="15px">
          <FullCalendar
            height="75vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CalendarPage;
