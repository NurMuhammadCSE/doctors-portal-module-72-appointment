import React, { useState } from "react";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedData] = useState(new Date());

  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedData={setSelectedData}
      ></AppointmentBanner>
      <AvailableAppointments
        selectedDate={selectedDate}
        setSelectedData={setSelectedData}
      ></AvailableAppointments>
    </div>
  );
};

export default Appointment;
