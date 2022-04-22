import React from 'react';
import ReadingButton from '../../components/buttonComponent/ReadingButton';
import styles from './OverviewPage.module.css';
import Footer from '../homePage/components/footerSection/Footer';
import BookImage from '../../assets/images/bookImage.png';

const OverviewPage = () => {
  return (
    <div>
      <section className={ styles.upperDiv }>
        <div className={ styles.containerDiv }>
          <div className={ styles.imageDiv }>
            <img
              src='https://neverland-api.s3.amazonaws.com/manga/Reincarnated+Marquis+1.jpeg'
              alt='Attack-on-Titans-book-cover'
            />
          </div>
          <div className={ styles.textDiv }>
            <h3> Attack on Titan Episode 1</h3>
            <p> Author&apos;s name </p>
            <span className={ styles.spanTags }>
              <p> Tag</p>
              <p> &#8226;&#8195;Tag</p>
              <p> &#8226;&#8195;Tag</p>
            </span>
            <ReadingButton />
          </div>
        </div>
      </section>

      <section className={ styles.bottomDiv }>
        <div className={ styles.headingDiv }>
          <h3> Synopsis </h3>
          <div className={ styles.bottomLine } />
        </div>
        <div className={ styles.textArea }>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
            condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem
            neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar,
            hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.
            Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.
            Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
            fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
            consequat, leo eget bibendum sodales, augue velit cursus nunc, quis
            gravida magna mi a libero. Fusce vulputate eleifend sapien.
            Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
            metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis
            hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci
            luctus et ultrices posuere cubilia Curae; In ac dui quis mi
            consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor,
            suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam
            ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget,
            posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum
            rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero.
            Cras id dui. Aenean ut
          </p>
        </div>

        <div className={ styles.buttonDiv }>
          {' '}
          <ReadingButton />
          {' '}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default OverviewPage;
