import Layout from '../components/Layout';

import { animate, motion } from 'framer-motion';


const Index = () => {
  let easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInRight = {
    initial: {
      x: -160,
      opacity: 0,
      transition: { duration: 0.6, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easing,
      },
    },
  };

  const fadeInLeft = {
    initial: {
      x: 160,
      opacity: 0,
      transition: { duration: 0.3, ease: easing },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: easing,
      },
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Layout>
        <div>
          gfgfg
          {}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus, arcu
            in viverra vehicula, eros lacus placerat ipsum, sit amet malesuada tortor mi
            at urna. Fusce accumsan, sapien ut feugiat pretium, mauris neque porta nibh,
            tristique pellentesque nibh lorem eu justo. Etiam justo lorem, facilisis at
            viverra at, ultrices eget sem. Donec quis condimentum orci. Aliquam erat
            volutpat. Aliquam et pulvinar dolor. Aliquam erat volutpat. Proin accumsan
            ultricies blandit. Nullam ut turpis venenatis, scelerisque nunc ac, efficitur
            risus. Integer sit amet metus iaculis, ullamcorper ipsum in, lacinia mauris.
            Nam laoreet sem sit amet tortor mollis scelerisque. Pellentesque in velit
            rhoncus, malesuada massa nec, placerat neque. Maecenas condimentum massa sed
            facilisis ultrices. Donec iaculis nulla id metus fringilla, ut ornare justo
            finibus. Praesent sed sagittis dolor. Aliquam dignissim, libero gravida
            accumsan consequat, diam neque elementum velit, eget tincidunt metus purus at
            diam. Praesent aliquet massa vitae lacinia bibendum. Sed tristique mi vitae
            sapien iaculis, sit amet iaculis diam efficitur. Morbi viverra in urna maximus
            luctus. Aenean eleifend ipsum lorem, nec pellentesque mi imperdiet non.
            Integer nec lectus ac leo tempor lacinia sit amet sit amet metus. Maecenas
            consectetur nibh ac ante dictum ultrices. Donec blandit ac lectus feugiat
            iaculis. Curabitur sodales magna consequat libero maximus, et ultrices felis
            sodales. Aenean laoreet sodales elit, vel molestie urna consequat quis. Sed
            non elit et dolor eleifend eleifend eleifend non quam. Vivamus pulvinar semper
            sapien, nec consectetur velit facilisis et. Sed in sem quis ante posuere
            congue. Aenean in consectetur velit, sed ultricies risus. Morbi et turpis et
            tellus malesuada hendrerit cursus eu dolor. Aliquam auctor eleifend sapien,
            vel sodales enim condimentum in. Nullam ac rutrum lectus. Ut venenatis vitae
            nisl nec consequat. Cras hendrerit justo nec rutrum viverra. Curabitur lectus
            turpis, ultricies eget lectus a, volutpat feugiat elit. Nunc quis laoreet
            eros, eget consequat elit. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Vivamus pellentesque, massa vitae
            blandit interdum, magna urna pulvinar ex, vel venenatis tortor mi ut risus.
            Orci varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Donec tincidunt est eu libero eleifend pharetra. Sed molestie
            cursus ultrices. Sed at mi dolor. Proin eu vestibulum ligula, vestibulum
            consectetur quam. Quisque semper vitae nisl eget fermentum. Curabitur nec
            lacus et lectus fringilla consectetur id sed nunc. Morbi feugiat lorem a
            fringilla pretium. Nunc porttitor felis in tempus rhoncus. Phasellus sit amet
            ex in diam commodo maximus at suscipit orci. Nunc commodo ut erat nec
            faucibus. Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. In hac habitasse platea dictumst. Sed mollis rhoncus
            nibh, ut fringilla dui sollicitudin quis. Morbi tortor neque, rutrum vitae
            laoreet ut, convallis luctus justo. Vivamus accumsan laoreet odio, vel blandit
            arcu efficitur quis. Curabitur blandit ipsum et felis ultrices, eu auctor sem
            luctus. Quisque consectetur massa id dui imperdiet, eu euismod nisi accumsan.
            Vivamus ut ante non quam sollicitudin egestas. Proin dolor sem, eleifend in
            erat vel, placerat consectetur justo. Donec gravida augue sit amet magna
            cursus molestie. Curabitur aliquet justo blandit, gravida ligula vel, cursus
            tellus. Aenean placerat, ipsum at elementum faucibus, sem tellus sagittis ex,
            sed tincidunt ipsum purus eu orci. Vestibulum diam eros, varius vitae
            fermentum vel, egestas consequat sem. Donec porttitor urna ex, sed porttitor
            purus sagittis non. Pellentesque tempor libero vel massa eleifend suscipit.
            Nunc magna risus, interdum eget tellus sed, malesuada sodales dolor. Phasellus
            sapien mi, egestas ut turpis sed, bibendum pulvinar urna. Proin bibendum augue
            eget risus placerat, eget fermentum ante blandit. Nulla eu posuere augue.
            Donec eget metus non diam cursus tincidunt eu mattis mauris. Mauris fermentum
            felis eros, a congue ante luctus sed. Sed nisl urna, laoreet ac iaculis nec,
            vehicula eget justo. Cras porttitor iaculis mi, viverra molestie quam
            fringilla et. Suspendisse eu tristique justo. Sed eget commodo enim, at tempus
            tortor. Duis finibus nulla odio, pellentesque dictum quam luctus ac. Ut
            imperdiet rhoncus congue. Etiam rhoncus quis leo vitae ornare. Sed turpis
            elit, elementum a orci eget, facilisis sodales purus. Aenean dapibus arcu
            consequat ante feugiat, nec porta erat molestie. Proin pharetra bibendum odio,
            eu lobortis ante eleifend quis. Integer vel nisl purus. Aliquam commodo erat
            vel tristique tristique. Duis auctor lacinia ante. Nunc feugiat iaculis risus,
            vel blandit lectus ullamcorper id. Vestibulum laoreet lacus turpis, eget
            posuere mauris placerat eget. Morbi non ipsum dignissim nisl vulputate
            lobortis. Quisque posuere, felis finibus rutrum blandit, dui est hendrerit
            ligula, vitae ornare purus nulla ut nisi. Quisque leo magna, vehicula et metus
            sed, interdum tempor justo. Nam feugiat ultricies ullamcorper. Nunc
            condimentum felis lorem. Praesent interdum ipsum sed elit feugiat, id
            hendrerit mauris tincidunt. Nullam tristique quam dapibus rhoncus rhoncus. In
            vehicula hendrerit augue, ac consequat nisl maximus eget. Donec tempus
            placerat tortor, vel egestas tortor aliquam et. Praesent non tincidunt orci.
            Donec lobortis lectus quis augue gravida, vel pharetra augue tincidunt.
            Pellentesque efficitur pulvinar vulputate. Vivamus nec porta purus. Donec
            pulvinar lacus est. Nam sed metus fringilla, semper tellus sed, dictum orci.
            Nulla id bibendum nisi, nec mattis massa. Morbi non nulla sit amet elit
            dignissim ullamcorper. Quisque cursus, nibh sed tristique varius, lorem leo
            condimentum ex, eu tempor mauris augue sit amet nibh. Fusce malesuada, odio id
            maximus efficitur, ex tortor rutrum diam, eget facilisis urna metus quis arcu.
            Etiam sem neque, scelerisque eu egestas eget, gravida non risus. Maecenas
            tempus tincidunt dolor in ultrices. Suspendisse vel sapien quis nunc facilisis
            semper. Quisque elementum tortor leo, eget imperdiet nunc facilisis a. Morbi
            id porttitor nibh. Vestibulum vitae turpis libero. Mauris vel lectus ornare,
            hendrerit dui ut, tempus tellus. Suspendisse potenti. Quisque mi eros, posuere
            in neque in, posuere viverra augue. Donec nisi magna, bibendum ut augue
            ornare, egestas sollicitudin libero. Donec volutpat lobortis urna, ac euismod
            magna blandit ut. Etiam commodo aliquam mattis. Vestibulum laoreet dolor eu
            aliquam aliquet. Integer urna enim, imperdiet quis vestibulum nec, consectetur
            in velit. Mauris vel ante at lorem interdum ornare nec a nulla. Nullam
            ultrices tellus lobortis diam fermentum blandit. Quisque nec arcu mauris.
            Etiam ut orci accumsan, sollicitudin leo ac, lobortis tellus. Mauris
            pellentesque purus eu commodo pretium. Aliquam erat volutpat. Aliquam
            facilisis maximus dui ac condimentum. Nunc libero justo, facilisis sed finibus
            sit amet, rutrum a magna. Sed mattis risus justo, ac mattis quam laoreet vel.
            Mauris dui lectus, fermentum ac rutrum vel, sodales quis lectus. Morbi egestas
            dui ut nisl mattis commodo. Curabitur condimentum semper orci, dignissim
            ultricies nulla tincidunt et. Donec id semper urna, eu feugiat lacus. Morbi
            dui risus, posuere vel lobortis ut, egestas et arcu. Donec vitae libero dolor.
            Curabitur id metus fringilla, iaculis ex a, rhoncus sapien. Phasellus
            ultrices, risus quis malesuada lacinia, nibh dolor ornare orci, at eleifend
            diam purus non diam. Nullam pellentesque at leo ut lacinia. Sed blandit
            tincidunt turpis, sit amet consequat metus venenatis eget. Orci varius natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas
            non arcu tincidunt, rutrum arcu a, euismod nunc. Quisque quis mattis turpis,
            quis faucibus quam. Vestibulum tempor porta elit, nec tincidunt diam lobortis
            nec. Nullam eget rutrum urna, ut varius nulla. Nulla a euismod eros. Quisque
            est nisl, laoreet in congue vel, pretium eu eros. Ut aliquet tincidunt urna ut
            auctor. Quisque eget faucibus nibh, auctor viverra lorem. Vivamus quis mollis
            eros. Sed suscipit dui id fermentum condimentum. In pellentesque lacus at
            sapien tincidunt faucibus. Donec a interdum dui. Nulla sed elit felis. In
            blandit consequat mauris, nec tincidunt risus. Donec fringilla, urna eget
            posuere gravida, libero felis semper nunc, pretium imperdiet nunc libero in
            massa. Phasellus malesuada ex ipsum, ut lacinia velit cursus ac. Morbi cursus
            gravida purus, vel suscipit massa venenatis ut. Nam a auctor ligula. Mauris
            non finibus risus, ut rutrum felis. Mauris dapibus aliquet lacus, vel faucibus
            purus. Morbi bibendum velit rutrum, aliquam purus et, suscipit erat. Aenean
            eget ultrices mauris. Sed eget arcu neque. Sed auctor tristique pulvinar.
            Integer commodo bibendum est. Nunc at tempor lectus, et sollicitudin ipsum.
            Curabitur tincidunt libero eu lacus mollis, a consequat elit maximus. Donec
            eget facilisis libero. Sed porttitor at lorem non fermentum. Ut consequat
            metus sit amet blandit tristique. Integer luctus lacinia nisi, non faucibus
            metus mollis sit amet. Phasellus maximus justo nec elit luctus, in
            pellentesque nunc varius. Donec mattis rutrum diam nec fermentum.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Index;
