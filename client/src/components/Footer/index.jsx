import { Grid, Typography, Box, IconButton, Container } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {
  ContactSection,
  ContactHeading,
  ContactParagraph,
} from "../../assets/styles/StyledComponents";

function Footer() {
  return (
    <footer style={{ backgroundColor: "white", padding: "30px 30px" }}>
      <Container maxWidth="100%">
        <Typography
          variant="h2"
          sx={{
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "70px",
            color: "black",
            marginBottom: "40px",
          }}
        >
          Contact
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <ContactSection style={{ marginBottom: "20px" }}>
              <ContactParagraph>Phone</ContactParagraph>
              <ContactHeading>+49 30 915-88492</ContactHeading>
            </ContactSection>
            <ContactSection>
              <ContactParagraph>Address</ContactParagraph>
              <ContactHeading>
                Wallstraße 9-13, 10179 Berlin, Deutschland
              </ContactHeading>
            </ContactSection>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContactSection style={{ marginBottom: "20px" }}>
              <ContactParagraph>Socials</ContactParagraph>
              <Box display="flex" alignItems="center">
                <IconButton aria-label="instagram" color="black">
                  <InstagramIcon sx={{ width: "40px", height: "40px" }} />
                </IconButton>
                <IconButton aria-label="whatsapp" color="black">
                  <WhatsAppIcon sx={{ width: "40px", height: "40px" }} />
                </IconButton>
              </Box>
            </ContactSection>
            <ContactSection>
              <ContactParagraph>Working Hours</ContactParagraph>
              <ContactHeading>24 hours a day</ContactHeading>
            </ContactSection>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" mt={4}>
          <Grid item xs={12}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2582.835743323942!2d13.407114815447312!3d52.51750447553829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a85254e3751893%3A0x750e8b9567c768e8!2sIT%20Career%20Hub!5e0!3m2!1sen!2sus!4v1701435968683!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
