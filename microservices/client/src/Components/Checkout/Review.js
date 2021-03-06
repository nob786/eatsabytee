import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';



//========================Redux Imports=================
import { useSelector } from "react-redux";

const products = [
  { name: 'Chinese Rice', desc: 'A nice thing', price: '2500' },
  { name: 'Chinese Soup', desc: 'Another thing', price: '3000' },
  { name: 'Product 3', desc: 'Something else', price: '1500' },
  { name: 'Product 4', desc: 'Best thing of all', price: '2000' },
  { name: 'Shipping', desc: '', price: 'Free' },
];
const addresses = ['Shah rukne Alam', 'Multan', 'Punjab', '60000', 'PAK'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Ali' },
  { name: 'Card number', detail: '5403077416845579' },
  { name: 'Expiry date', detail: '04/2024' },
];

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

export default function Review() {
  const classes = useStyles();

  const {clickedMenuId} = useSelector(
    (state) => state.cart
  );
  const {custData} = useSelector(
    (state) => state.auth
  );

  const {deliveryAddress} = useSelector(
    (state) => state.cart
  );

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {clickedMenuId.map((product) => (
          <ListItem className={classes.listItem} key={product.itemName}>
            <ListItemText primary={product.itemName} secondary={product.description} />
            <Typography variant="body2">{product.price}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
            350 Rupees
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Delivery Address
          </Typography>
          <Typography gutterBottom>{custData.firstName}</Typography>
          <Typography gutterBottom>{deliveryAddress}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}