import NewsletterForm from "./components/NewsletterForm/NewsletterForm";

const Newsletter = () => {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 mt-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          STAY UP TO DATE ABOUT
          <br />
          OUR LATEST OFFERS
        </h2>
        <NewsletterForm />
      </div>
    </section>
  );
};

export default Newsletter;
