import React, { useState, useEffect } from "react";
import Testimonials from "./testimonilas/Testimonials";
import ServiceCards from "./services/ServiceCards";
import Banner from "./Banner";
import Stories from "./testimonilas/Stories";
import HappyClients from "./testimonilas/HappyClintsCountingWidget";
import WhatsAppButton from "../whatsapp/WhatsAppButton";
import ContactUsForm from "../forms/ContactUsForm";
import "./section.css";


export default function Body() {
  return (
    <main>
      <Banner />
      <ServiceCards />
      <Testimonials />
      <WhatsAppButton />
      <Stories />

    </main>
  );
}
