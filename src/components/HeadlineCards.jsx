export default function HeadlineCards() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <div className="relative">
        <div className=" absolute w-full h-full text-gray-200 bg-black/50 px-2 rounded-lg">
          <p className="font-bold text-2xl pt-4">Sun's Out,BOGO's Out</p>
          <p>Through 8/26</p>
          <button className="border-white bg-white text-black font-semibold mx-2 mt-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
      <div className="relative">
        <div className=" absolute w-full h-full text-gray-200 bg-black/50 px-2 rounded-lg">
          <p className="font-bold text-2xl pt-4">New Restaurants</p>
          <p>Added Daily</p>
          <button className="border-white bg-white text-black font-semibold mx-2 mt-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </div>
      <div className="relative">
        <div className=" absolute w-full h-full text-gray-200 bg-black/50 px-2 rounded-lg">
          <p className="font-bold text-2xl pt-4">We Deliver Desserts Too</p>
          <p>Tasty Treats</p>
          <button className="border-white bg-white text-black font-semibold mx-2 mt-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-lg"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  )
}
