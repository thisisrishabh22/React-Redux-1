import { Box, Typography } from "@material-ui/core";
import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
    return (
        <div>
            <Navbar />
            <Box>
                {" "}
                <Typography variant="h3" component="h3" gutterBottom align="center">
                    About Us
        </Typography>
                <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut et
                    inventore temporibus possimus animi laudantium voluptates quas
                    doloribus! Quisquam dicta earum voluptatum obcaecati ipsa nobis iusto
                    facere beatae iure? Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Quasi nam officiis debitis cum obcaecati quia animi
                    iste, voluptate tempora, eveniet nostrum. Impedit beatae quae
                    provident dolore recusandae natus officia consectetur! Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Consequatur tenetur amet
                    voluptatibus modi veniam laborum ea consectetur quibusdam iure quasi
                    molestiae voluptates in est dolorem dignissimos quod, doloremque fugit
                    accusamus.
        </Typography>
            </Box>
        </div>
    );
};

export default About;
