import Head from 'next/head';

const About = () => {
  return (
    <div className="min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>About Us - Next.js Solutions</title>
        <meta name="description" content="Learn more about Next.js Solutions and our mission, team, and services." />
      </Head>
      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p>Our mission is to provide cutting-edge web solutions that help businesses thrive in the digital age. We harness the capabilities of Next.js to build fast, scalable, and SEO-friendly applications that deliver exceptional user experiences.</p>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p>Founded in 2020, Next.js Solutions was born out of a passion for technology and a desire to push the boundaries of what’s possible on the web. Our team comprises industry experts with years of experience in web development, specializing in Next.js and modern JavaScript frameworks.</p>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Custom Web Applications: Tailored solutions designed to meet your specific business needs.</li>
            <li className="mb-2">eCommerce Platforms: Robust and scalable eCommerce sites that provide seamless shopping experiences.</li>
            <li className="mb-2">Performance Optimization: Enhancing the speed and performance of your existing applications.</li>
            <li className="mb-2">SEO and Analytics: Boosting your online presence through search engine optimization and in-depth analytics.</li>
          </ul>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Expertise: Our team is proficient in Next.js, React, and related technologies, ensuring top-notch solutions.</li>
            <li className="mb-2">Innovation: We stay ahead of industry trends to provide innovative and future-proof web applications.</li>
            <li className="mb-2">Customer-Centric Approach: We believe in building long-term relationships with our clients through transparency, reliability, and exceptional service.</li>
            <li className="mb-2">End-to-End Solutions: From concept to deployment and beyond, we offer comprehensive services to ensure your project’s success.</li>
          </ul>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2">Excellence: Striving for the highest quality in everything we do.</li>
            <li className="mb-2">Integrity: Conducting our business with honesty and transparency.</li>
            <li className="mb-2">Collaboration: Working closely with our clients to achieve their goals.</li>
            <li className="mb-2">Innovation: Constantly seeking new ways to improve and stay ahead of the curve.</li>
          </ul>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Meet the Team</h2>
          <ul className="list-disc pl-5">
            <li className="mb-2"><strong>John Doe – CEO:</strong> With over a decade of experience in web development, John leads our team with a vision for excellence and innovation.</li>
            <li className="mb-2"><strong>Jane Smith – CTO:</strong> An expert in Next.js and modern web technologies, Jane drives our technical strategy and development efforts.</li>
            <li className="mb-2"><strong>Emily Brown – Lead Designer:</strong> Emily’s creative designs ensure our applications are not only functional but also visually stunning.</li>
          </ul>
        </section>

        <section className="mb-8 max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="mb-2">Ready to take your web project to the next level? Get in touch with us today!</p>
          <p className="mb-2">Email: contact@nextjssolutions.com</p>
          <p className="mb-2">Phone: (123) 456-7890</p>
          <p className="mb-2">Address: 123 Innovation Drive, Tech City, TX 75001</p>
          <p className="mb-2">Follow us on social media for the latest updates and insights into the world of Next.js and web development:</p>
          <p className="mb-2">Twitter: @NextJSSolutions</p>
          <p className="mb-2">LinkedIn: Next.js Solutions</p>
        </section>
      </main>
    </div>
  );
};

export default About;
