import React, { useCallback, useEffect, useMemo } from 'react';
import Layout from '../../components/Layout';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { styled } from '@stitches/react';

const Page = styled('div', { display: 'flex' });

const PageHeader = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});
const Label = styled('span', {
  color: '#fff',
  borderRadius: '5px',
  fontSize: '15px',
  padding: '0.2em 0.6em',
  marginLeft: '10px',
  background: '#00ae5a',
});

const Index = ({ freelancers }) => {

  const router = useRouter();


  console.log('freelancers', freelancers);
  return (
    <Layout>
      <Grid container>
        <Grid item style={{ marginBottom: '10px' }}>
          <PageHeader>
            <h1 style={{ margin: '0px' }}>Усі фрилансери в Україні</h1>
            <Label>{freelancers.length}</Label>
          </PageHeader>
        </Grid>
        <Grid container>
          <Grid item xs={3} style={{ paddingRight: '5px' }}>
            <p>
              Фрілансер - «вільний художник», який працює дистанційно, виконує як разові,
              так і проектні завдання. Таке працевлаштування активно набирає популярності.
            </p>
          </Grid>
          <Grid item container xs={9}>
            {freelancers.map((freelancer) => {
              return (
                <>
                  <Grid item xs={12}>
                    <Card
                      sx={{
                        margin: '5px 0px',
                        maxWidth: '100%',
                        width: '100%',
                        borderRadius: '10px',
                      }}>
                      <CardActionArea
                        onClick={() => router.push('/freelancers/' + freelancer.id)}>
                        <CardContent style={{ padding: '10px 10px 6px' }}>
                          <Typography gutterBottom variant='h5' component='div'>
                            {freelancer?.firstName + ' ' + freelancer?.lastName}
                          </Typography>
                          <Typography variant='h6' component='div'>
                            {freelancer?.description}
                          </Typography>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                            }}>
                            <div
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                              }}>
                              <Button
                                size='small'
                                variant={'contained'}
                                style={{ borderRadius: '10px', marginRight: '10px' }}
                                color='primary'>
                                Додати до Корзини
                              </Button>
                              <Label>
                                {'Кількість пропозицій: ' + freelancer?.rates?.length}
                              </Label>
                            </div>
                            <Typography
                              variant='h6'
                              color='text.secondary'
                              style={{ right: '0' }}>
                              {freelancer?.price != null ? freelancer?.price : ''}
                            </Typography>
                          </div>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/users?filters[client][$eq]=false`);
  const data = await res.json();
  return { props: { freelancers: data } };
}

export default Index;
