import * as React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function TermsConditionsPage() {
  return (
    <Container maxWidth="md" sx={{ my: 8, textAlign: "center" }}>
      <Box sx={{ justify: "flex", justifyContent: "center" }}>
        <Typography variant="h4" gutterBottom>
          PLEASE TAKE A MOMENT TO REVIEW THESE TERMS
        </Typography>
        <Typography paragraph>
          These Terms of Use ("Terms") govern your access to and use of
          ayanomasuda.co.nz and its sub-domains and associated sites, as well as
          the pages and accounts of Ayano Masuda Photography ("we", "us", or
          "our") on various platforms like Facebook®, Twitter®, LinkedIn®,
          Google Plus®, and YouTube® ("the Sites"). Please read these Terms and
          our Privacy Policy carefully, as the latter is incorporated into these
          Terms by reference. By using any of the Sites, you agree to be bound
          by these Terms. If you do not agree to these Terms, please do not use
          the Sites. We reserve the right to modify these Terms at any time,
          with changes becoming effective immediately upon posting. You are
          responsible for reviewing any amended terms. Your continued use of a
          Site following any changes indicates your agreement to those changes.
        </Typography>
        <Typography variant="h5" gutterBottom>
          SITE CONTENT
        </Typography>
        <Typography paragraph>
          Ayano Masuda Photography retains ownership and control over the Sites,
          which provide information about our products and services and
          occasionally access to educational materials on various photography
          topics. Your use or access to the Sites does not constitute any
          representation or future commitment. Unauthorized reproduction, use,
          or theft of any content is strictly prohibited. By using the Sites,
          you agree to a charge of $50 per incident for any unauthorized use of
          our content, as determined solely by us.
        </Typography>

        <Typography variant="h5" gutterBottom>
          INTELLECTUAL PROPERTY
        </Typography>
        <Typography paragraph>
          Unless explicitly stated otherwise, Ayano Masuda Photography owns all
          rights, titles, and interests in and to the Sites, including graphics,
          site content, design, organization, compilation, and other matters
          related to or included on the Sites. Our trademarks, including our
          name Ayano Masuda and related names, product and service names, logos,
          slogans, and designs, are our property. You may not use these marks
          without prior written permission.
        </Typography>

        <Typography variant="h5" gutterBottom>
          THIRD PARTY RIGHTS
        </Typography>
        <Typography paragraph>
          We respect the intellectual property of others and request that you do
          the same. Users must obtain permission from the owners of any Third
          Party Content before using those materials. If you believe that your
          work has been copied in a way that constitutes copyright infringement,
          please contact us with the required information as outlined in these
          Terms.
        </Typography>

        <Typography variant="h5" gutterBottom>
          LINKING TO OUR SITES
        </Typography>
        <Typography paragraph>
          Anyone linking to the Sites must not misrepresent their relationship
          with Ayano Masuda Photography or contain content that is considered
          offensive or unlawful under New Zealand law.
        </Typography>

        <Typography variant="h5" gutterBottom>
          ADVERTISEMENTS AND LINKS
        </Typography>
        <Typography paragraph>
          We are not responsible for any loss or damage incurred as a result of
          dealings with advertisers on the Sites. The presence of third-party
          links does not constitute an endorsement by us, and we are not liable
          for any content, goods, or services available on or through such
          sites.
        </Typography>

        <Typography variant="h5" gutterBottom>
          DISCLAIMER AND LIABILITY LIMITATION
        </Typography>
        <Typography paragraph>
          The Sites are provided "as is," without warranty of any kind. To the
          fullest extent permissible under New Zealand law, we disclaim all
          warranties, express or implied. We are not liable for any direct,
          indirect, incidental, consequential, or punitive damages arising from
          your use of the Sites.
        </Typography>

        <Typography variant="h5" gutterBottom>
          APPLICABLE LAW AND JURISDICTION
        </Typography>
        <Typography paragraph>
          These Terms are governed by the laws of New Zealand. Any disputes
          relating to these Terms or the Sites will be resolved in accordance
          with New Zealand law, and you agree to submit to the jurisdiction of
          New Zealand courts.
        </Typography>
      </Box>
    </Container>
  );
}
