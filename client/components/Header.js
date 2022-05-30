import { motion } from 'framer-motion';
import Link from '@mui/material/Link';

const Header = () => {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '0 10px',
      }}>
      <Link variant='h6' underline='none' color='inherit' href='/' sx={{ fontSize: 24 }}>
        {'SelfEmploy'}
      </Link>
      <p>DDSDSD</p>
      <p>DDSDSD</p>
    </motion.div>
  );
};

export default Header;
