import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchJobs } from "../stores/actionCreators/jobs";
const callouts = [
  {
    name: "Data Engineer",
    salary: "9M/month - 14 M/month",
    imageSrc:
      "data:image/png;base64,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",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Software Engineer",
    salary: "7/month - 10 M/month",
    imageSrc:
      "data:image/png;base64,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",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Product Manager",
    salary: "8/month - 11 M/month",
    imageSrc:
      "https://lelogama.go-jek.com/cache/8f/f8/8ff8cfa95d412a99bac2e17664bc74a9.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Example() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobs());
  }, []);

  const handleDetail = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-20 lg:py-20 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">We Are Hiring!</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  {/* <p>
                    {callout}
                  </p> */}
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {callout.salary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto py-20 px-4 sm:py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl mb-4 font-extrabold text-gray-900">Job List</h2>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {!isLoading && <p>Loading...</p>}
          {error && <p>Error...</p>}
          {isLoading &&
            !error &&
            jobs.map((job) => (
              <a
                onClick={() => handleDetail(job.id)}
                key={job.id}
                className="group"
              >
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">

                </div>
                <h3 className="mt-4 text-sm text-gray-700">{job.title}</h3>
                Job Description : <h3 className="mt-4 text-sm text-gray-700">{job.description}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  Location : {job.location}
                </p>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
}
