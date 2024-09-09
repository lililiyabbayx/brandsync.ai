"use client";
import { useState } from "react";
import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";
import { TextField } from "@mui/material";
import { addEmailToWaitlist } from "../../services/firebaseService";

export const HomepageHero = () => {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await addEmailToWaitlist(email); // Call the backend function
        setSuccessMessage("Thank you for joining the waitlist!");
        setEmail(""); // Clear the input field
      } catch (error) {
        console.error("Error adding email: ", error);
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <Hero>
      <Button
        className="translate-y-[-1rem] animate-fade-in opacity-0"
        href="/"
        variant="secondary"
        size="small"
      >
        <span>Coming Soon</span> <Highlight>→</Highlight>
      </Button>
      <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        BrandSync AI
        <br className="hidden md:block" /> Seamless Creator-Business Connections
      </HeroTitle>
      <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
        Where Influencers and Businesses Meet Their Perfect Business Matches
        <br className="hidden md:block" /> Streamline issues, sprints, and
        product roadmaps.
      </HeroSubtitle>

      {/* Join Waitlist Form */}
      <form
        onSubmit={handleJoinWaitlist}
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
        style={{
          display: "flex",
          flexDirection: "column", // Stack elements vertically
          alignItems: "center", // Center elements horizontally
          gap: "1rem",
          textAlign: "center", // Center text inside the form
        }}
      >
        <TextField
          type="email"
          label="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          sx={{
            backgroundColor: "black", // Change the background color of the input
            borderRadius: "10px", // Add border radius for rounded corners
            padding: "8px", // Add padding inside the text field
            width: "400px", // Make the text field wider
            input: {
              color: "white", // Text color inside the input
              fontSize: "18px", // Set font size inside the text field
            },
            label: {
              color: "white", // Label text color
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "white", // Outline color
              },
              "&:hover fieldset": {
                borderColor: "#bbb", // Outline color on hover
              },
              "&.Mui-focused fieldset": {
                borderColor: "white", // Outline color when focused
              },
            },
          }}
        />
        <Button variant="primary" size="large" type="submit">
          <span>Join Waitlist</span>
          <Highlight>
            <ChevronIcon />
          </Highlight>
        </Button>
      </form>

      {/* Display success message */}
      {successMessage && <p>{successMessage}</p>}

      <HeroImage />
    </Hero>
  );
};
