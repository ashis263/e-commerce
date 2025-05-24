import Button from "../../../ui/Button/Button";

const NewsletterForm = () => {
  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-8">
      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-grow bg-white text-black rounded-md px-4 py-3"
      />
      <Button variant="newsletter" content="Subscribe to Newsletter" />
    </div>
  );
};

export default NewsletterForm;
