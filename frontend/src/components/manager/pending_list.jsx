

const ListenerReviews = () => {
    const reviews = [
      {
        name: "John Doe",
        text: "This podcast is amazing! The storytelling and production quality are top-notch. I can't wait for the next episode!",
      },
      {
        name: "Jane Smith",
        text: "This podcast kept me on the edge of my seat. It's a must-listen for true crime enthusiasts!",
      },
      {
        name: "Emily Johnson",
        text: "I can't get enough of this podcast! The host's voice is so soothing, and the stories are gripping. Highly recommend!",
      },
    ];
  
    return (
      <section className="bg-white px-4 py-12 md:py-24">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="font-black text-black text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
            What Listeners Are Saying
          </h2>
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 relative">
            {reviews.map((review, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-8 text-center md:w-1/3">
                <p className="font-bold uppercase">{review.name}</p>
                <p className="text-xl font-light italic text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ListenerReviews;
  