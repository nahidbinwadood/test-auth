import Counter from '@/components/counter';
import FeatureSection from './_components/feature-section';
import HomeBanner from './_components/home-banner';
import CtaSection from './_components/cta-section';

const Homepage = () => {
  return (
    <div>
      <HomeBanner />
      {/* counter section */}
      <Counter />

      {/* Features Section */}
      <FeatureSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Homepage;
