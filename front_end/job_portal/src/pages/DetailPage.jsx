import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/solid";
// import { RadioGroup } from "@headlessui/react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobDetail } from "../stores/actionCreators/jobs";

const job = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  colors: [
    { name: "White", class: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", class: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [data, setData] = useState("");
  const [selectedColor, setSelectedColor] = useState(job.colors[0]);
  const [selectedSize, setSelectedSize] = useState(job.sizes[2]);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detail } = useSelector((state) => state);
  console.log(detail);

  useEffect(() => {
    dispatch(fetchJobDetail(id));
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li className="text-sm">
              <Link
                to="/jobs"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
                style={{ fontSize: '1.7rem' }}
              >
                {detail.title}
              </Link>
            </li>
          </ol>
        </nav>

        {/* Image gallery */}
        <div className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
          <div className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
            <img
              src={detail.mainImg}
              alt="pict"
              className="w-full h-full object-center object-cover"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            {detail.Images &&
              detail.Images.map((image) => (
                <div
                  key={image.id}
                  className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
                >
                  <img
                    src={image.imgUrl}
                    alt="pict"
                    className="w-full h-full object-center object-cover"
                  />
                </div>
              ))}
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={detail.mainImg}
              alt="pict"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>

        {/* job info */}
        <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl text-left">
              {detail.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Job information</h2>
            <p className="text-3xl text-gray-900"> {detail.title}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} applied
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Apply
              </button>
            </form>
          </div>

          <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only ">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900 text-left">
                  {detail.description}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900 text-left">
                Location
              </h3>

              <div className="mt-4">
                <ul
                  role="list"
                  className="pl-4 list-disc text-sm space-y-2 text-left"
                >
                  
                    <li  className="text-gray-400 ">
                      <span className="text-gray-600 text-left">
                        {detail.location}
                      </span>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900 text-left">
                type
              </h3>

              <div className="mt-4">
                <ul
                  role="list"
                  className="pl-4 list-disc text-sm space-y-2 text-left"
                >
                  
                    <li  className="text-gray-400 ">
                      <span className="text-gray-600 text-left">
                        {detail.type  }
                      </span>
                    </li>
                  
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900 text-left">
                Details
              </h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600 text-left">
                  {detail.url}
                </p>
              </div>
            </div>

            <div className="mt-5">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
