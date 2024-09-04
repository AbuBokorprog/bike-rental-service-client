import React from "react";
import BikeComponent from "../../component/bikes/BikeComponent";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const BikeDetails = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div>
      <div className="my-5 lg:my-10"></div>
      <div className="lg:flex items-start justify-between lg:gap-10 mx-auto">
        {/* slider and description */}
        <div className="md:w-2/3 w-full">
          <ImageGallery items={images} />

          <div className="my-5 lg:my-10">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              et. Enim ipsam voluptate pariatur molestiae id adipisci tempora
              veritatis doloremque facere, error, delectus hic, praesentium
              reiciendis? Dolores laborum dolorem dolore excepturi rem.
              Reprehenderit saepe qui cupiditate? Est itaque reprehenderit natus
              quidem, numquam repellendus. Voluptates nobis dolores dolore
              consectetur, provident perspiciatis! Sed adipisci voluptatibus
              eius magnam iusto nobis tempora, officia modi totam rem asperiores
              quo blanditiis in exercitationem. Accusamus cum porro laudantium
              repellendus sint magni quisquam rerum neque veniam, distinctio a
              nulla ut pariatur saepe temporibus ullam odit! Molestiae quasi
              corrupti illo recusandae odio vero reprehenderit quos labore
              maiores ea esse hic sapiente molestias nam id, animi consequuntur
              veritatis architecto vel numquam veniam. Tempora rem non tenetur
              corporis suscipit culpa sapiente dolores optio, officiis harum
              iure architecto, eveniet praesentium minus repellat ab dignissimos
              quae eius cupiditate odit facere? Excepturi voluptates rem
              consectetur. Vero esse sit placeat veniam cum est temporibus!
              Nostrum voluptatibus commodi ipsa, hic inventore atque. Inventore,
              quae. Est, eum velit officiis quis dolore tenetur sint! Repellat,
              iure laborum. Ea, corporis tempore ipsa eaque modi, odit
              cupiditate, natus delectus omnis blanditiis nobis! Voluptas
              eveniet quia qui debitis, deleniti voluptatum consectetur minima
              voluptates nostrum! Temporibus doloremque possimus debitis, illum
              omnis fugiat, sequi molestias nesciunt dolorum deleniti in dolorem
              cumque saepe. Dolore perferendis dignissimos delectus pariatur
              minus! Quasi, quidem! Possimus omnis perferendis saepe magni sunt,
              non iusto officiis minus quasi sapiente fugiat necessitatibus
              corporis placeat est quidem atque modi natus, delectus et? Quas
              reiciendis facere inventore. Minima possimus inventore magnam.
              Facilis voluptates et tempore quae sit deleniti nam in minus,
              saepe asperiores excepturi, nobis id dolor at consectetur aliquam
              adipisci vitae libero esse quia? Consequatur, quaerat enim ratione
              molestiae, esse omnis unde officiis nam eaque doloremque dolorem
              alias quas provident, aut dicta asperiores hic error aliquam
              cumque aspernatur sint. Cupiditate, temporibus officiis!
            </p>
          </div>
        </div>
        {/* price and information. */}
        <div className="md:w-1/3">
          <div className="bg-black text-white p-6">
            <div className="flex items-center justify-between mx-auto">
              <p className="text-xl font-semibold">Price</p>
              <p>
                <span className="text-2xl font-bold">120 TK</span>{" "}
                <span>/Hour</span>
              </p>
            </div>
            <div className="mt-4">
              <Button variant="contained" color="primary" className="w-full">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="my-3 lg:my-6">
            <div>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  className="uppercase font-semibold"
                >
                  Engine
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="uppercase font-semibold"
                >
                  Identification
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="uppercase font-semibold"
                >
                  Suspension/Brakes
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="uppercase font-semibold"
                >
                  Power transmition
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2-content"
                  id="panel2-header"
                  className="uppercase font-semibold"
                >
                  Dimention/weights
                </AccordionSummary>
                <AccordionDetails>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      {/* Related bikes */}
      <div>
        <h3 className="text-xl lg:text-3xl font-semibold my-5 lg:my-10 uppercase">
          Related Bikes.
        </h3>
        <BikeComponent bikes={undefined} />
      </div>
    </div>
  );
};

export default BikeDetails;
