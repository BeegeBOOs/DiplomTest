import { useState, useEffect } from 'react';
import Layout from '../../components/Layout';
import CreateRate from '../../components/CreateRate';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { GetTaskFetch } from '../../actions';
import { styled } from '@stitches/react';
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
import WorkHistoryTwoToneIcon from '@mui/icons-material/WorkHistoryTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';

const Label = styled('span', {
  color: '#fff',
  borderRadius: '5px',
  fontSize: '15px',
  padding: '0.2em 0.6em',
  marginLeft: '10px',
  background: '#00ae5a',
});

const Project = ({ freelancers }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const router = useRouter();
  const { slug } = router.query;
  // console.log(slug);
  useEffect(() => {
    dispatch(
      GetTaskFetch(
        `http://localhost:1337/api/tasks?populate=*&filters[slug][$eq]=${slug}`,
      ),
    );
  }, [slug]);

  const task = {};

  tasks.map((x) => {
    task = x.attributes;
  });
  console.log('task', task);
  console.log('freelancers', freelancers);

  let temp, isFreelancer;
  if (typeof window !== 'undefined') {
    temp = JSON.parse(localStorage.getItem('user'));
    isFreelancer = !temp?.user?.client;
    // console.log('temp', isFreelancer);
  } else {
    console.log('You are on the server');
  }

  return (
    <Layout>
      <Box>
        <h1>{task?.title}</h1>
      </Box>
      <Grid container>
        <Grid item xs={9} style={{ paddingRight: '5px' }}>
          <div style={{ backgroundColor: '#F5F5F5' }}>
            {task?.description}
            <ul>
              {task?.features?.map((feature) => {
                return (
                  <li>
                    {feature.title +
                      ' ' +
                      (feature.subTitle != null ? feature.subTitle : '')}
                  </li>
                );
              })}
            </ul>
            <ul>
              {task?.skills?.map((skill) => {
                return <li>{skill.title}</li>;
              })}
            </ul>
          </div>
          {isFreelancer ? (
            <CreateRate taskSlug={task?.slug} />
          ) : (
            <Button
              fullWidth
              onClick={() => {
                router.push('/auth/register');
              }}
              startIcon={<HowToRegTwoToneIcon />}>
              Створіть акаунт фрілансера
            </Button>
          )}
          {/* {isFreelancer 
          ? (<Button fullWidth variant='contained' startIcon={<WorkHistoryTwoToneIcon/>} onClick={()=>{<CreateRate/>}}>Виконати проект</Button>) 
          : (<Button fullWidth onClick={()=>{router.push('/auth/register')}} startIcon={<HowToRegTwoToneIcon/>}>Створіть акаунт фрілансера</Button>)} */}
          <Grid container item style={{ marginTop: '10px' }}>
            {task?.rates?.map((rate) => {
              let freelancer;
              freelancers.map((x) => {
                x.id == rate.freelancerName ? (freelancer = x) : '';
              });

              return (
                <Grid
                  item
                  container
                  xs={12}
                  style={{ backgroundColor: '#F5F5F5', padding: '15px', margin: '5px' }}>
                  <Grid item xs={4}>
                    <Button
                      onClick={() => {
                        router.push('/users/' + rate.freelancerName);
                      }}>
                      {freelancer.firstName + ' ' + freelancer.lastName}
                    </Button>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={8}
                    style={{
                      right: '15px',
                      justifyContent: 'flex-end',
                      marginBottom: '15px',
                    }}>
                    <Label>{'Тривалість: ' + rate.duration}</Label>
                    <Label>{'Ставка: ' + rate.price}</Label>
                  </Grid>
                  <Grid item xs={12}>
                    {rate.description}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <div>
            <p>{new Date(task.createdAt).toLocaleString('uk')}</p>
            <Button
              onClick={() => {
                router.push('/users/' + task.customer.data.id);
              }}>
              {task.customer?.data.attributes.firstName + ' ' + task.customer?.data.attributes.lastName}
            </Button>
          </div>
        </Grid>
      </Grid>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:1337/api/users`);
  const data = await res.json();
  return { props: { freelancers: data } };
}

export default Project;
