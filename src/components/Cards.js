import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, Grid } from "@mui/material";
import { CardStyle } from "../Style/CardStyle";
import menshoes from '../assets/images/menshoes.jpeg';
import womenshoes from '../assets/images/womenshoes.jpeg';
import kidsshoes from '../assets/images/kidshoes.jpeg';
import { Link } from "react-router-dom";

const Cards = () => {
  const cardstyle = CardStyle();
  const arrayData=[
    {
      image:menshoes,
      name:'MEN SHOES COLLECTION',
      description:'Constructed from luxury nylons, leathers and custom harware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
      btn:'MEN SHOP',
      gender:'/men',

    },
    {
      image:womenshoes,
      name:'WOMEN SHOES COLLECTION',
      description:'Constructed from luxury nylons, leathers and custom harware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
      btn:'WOMEN SHOP',
      gender:'/women',
      
    },
    {
      image:kidsshoes,
      name:'KIDS SHOES COLLECTION',
      description:'Constructed from luxury nylons, leathers and custom harware, featuring sport details such as hidden breathing vents, waterproof + antimicrobial linings, and more.',
      btn:'KIDS SHOP',
      gender:'/kids',
      
    },
  ];
  return (
    <Grid container columns={12} spacing={3} style={{ padding: "80px" }}>
    {
      arrayData.map(( ind ) => (
      <Grid item lg={4} md={6} sm={12}>
        <Card className={cardstyle.fullcard}>
          <CardActionArea>
            <CardMedia component="img" height="auto" image={ind.image} />
            <CardContent>
              <Typography
                className={cardstyle.collectiontitle}
                gutterBottom
                variant="h5"
                component="div"
              >
                {ind.name}
              </Typography>
              <Typography className={cardstyle.body} variant="body2">
               {ind.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={ind.gender} className={cardstyle.button}>
              {ind.btn}
            </Link>
          </CardActions>
        </Card>
      </Grid>
      ))
    }


    </Grid>
    // <Box className={cardstyle["main-card"]}>
    //   <Card className={cardstyle.fullcard} >
    //     <CardActionArea>
    //       <CardMedia component="img" height="auto" image={menshoes} />
    //       <CardContent>
    //         <Typography
    //           className={cardstyle.collectiontitle}
    //           gutterBottom
    //           variant="h5"
    //           component="div"
    //         >
    //           MEN SHOES COLLECTION
    //         </Typography>
    //         <Typography className={cardstyle.body} variant="body2">
    //           Constructed from luxury nylons, leathers, and custom hardware,
    //           featuring sport details such as hidden breathing vents, waterproof
    //           + antimicrobial linings, and more.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button className={cardstyle.button}>SHOP MEN</Button>
    //     </CardActions>
    //   </Card>

    //   <Card className={cardstyle.fullcard} >
    //     <CardActionArea>
    //       <CardMedia component="img" height="auto" image={womenshoes} />
    //       <CardContent>
    //         <Typography
    //           className={cardstyle.collectiontitle}
    //           gutterBottom
    //           variant="h5"
    //           component="div"
    //         >
    //           WOMEN SHOES COLLECTION
    //         </Typography>
    //         <Typography className={cardstyle.body} variant="body2">
    //           Constructed from luxury nylons, leathers, and custom hardware,
    //           featuring sport details such as hidden breathing vents, waterproof
    //           + antimicrobial linings, and more.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button className={cardstyle.button}>SHOP WOMEN</Button>
    //     </CardActions>
    //   </Card>

    //   <Card className={cardstyle.fullcard} >
    //     <CardActionArea>
    //       <CardMedia component="img" height="auto" image={kidshoes} />
    //       <CardContent>
    //         <Typography
    //           className={cardstyle.collectiontitle}
    //           gutterBottom
    //           variant="h5"
    //           component="div"
    //         >
    //           KIDS SHOES COLLECTION
    //         </Typography>
    //         <Typography className={cardstyle.body} variant="body2">
    //           Constructed from luxury nylons, leathers, and custom hardware,
    //           featuring sport details such as hidden breathing vents, waterproof
    //           + antimicrobial linings, and more.
    //         </Typography>
    //       </CardContent>
    //     </CardActionArea>
    //     <CardActions>
    //       <Button className={cardstyle.button}>SHOP KIDS</Button>
    //     </CardActions>
    //   </Card>
    // </Box>
  );
};

export default Cards;
