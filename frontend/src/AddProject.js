import { useState } from "react";
import { TextField } from "@material-ui/core";
import "./App.css"
import Select from "react-select";

export default function AddProject() {

  const [projectDetails, setProjectDetails] = useState({
		name: "",
		desc: "",
		repoLink: "",
		tags: [],
		contributors: [],
  });

  const options = [
		{ value: "Chocolate", label: "Chocolate" },
		{ value: "Strawberry", label: "Strawberry" },
		{ value: "Vanilla", label: "Vanilla" },
  ];

  const onChangeInput = (event) =>
    setProjectDetails((oldProjectDetails) => ({
        ...oldProjectDetails,
        [event.target.name]: event.target.value
      }))

  const onDropDownChange = (event, {name, option, action, removedValue}) =>{
    if (action === "select-option"){
      return setProjectDetails((oldProjectDetails) => ({
			...oldProjectDetails,
			[name]: [...oldProjectDetails[name], option],
		}));
  }else{
    return setProjectDetails((oldProjectDetails) => ({
      ...oldProjectDetails,
      [name]: oldProjectDetails[name].filter(e=>  e?.value !== removedValue?.value),
    }));
  }
    }

    return (
		<div className="container">
			<div className="formContainer">
				<h1 className="mb-8 text-4xl font-extrabold leading-none ">Register Your Project</h1>
				<div className="fields">
					<TextField
						id="standard-basic"
						className="field"
						name="name"
						label="Name"
						variant="standard"
						value={projectDetails.name}
						onChange={onChangeInput}
					/>
				</div>
				<div className="fields">
					<TextField
						id="standard-basic"
						name="desc"
						className="field"
						label="Description"
						value={projectDetails.desc}
						onChange={onChangeInput}
						variant="standard"
					/>
				</div>
				<div className="fields">
					<TextField
						id="standard-basic"
						name="repoLink"
						className="field"
						label="Repository Link"
						value={projectDetails.repoLink}
						onChange={onChangeInput}
						variant="standard"
					/>
				</div>
				<div className="fields">
					<label htmlFor=""> Tags</label>
					<Select
						isMulti
						name="tags"
						value={projectDetails.tags}
						onChange={onDropDownChange}
						options={options}
						className="basic-multi-select field"
						classNamePrefix="Tags"
					/>
				</div>
				<div className="fields">
					<label htmlFor=""> Contributors</label>
					<Select
						isMulti
						name="contributors"
						value={projectDetails.contributors}
						onChange={onDropDownChange}
						options={options}
						className="basic-multi-select field"
						classNamePrefix="Contributors"
					/>
				</div>
				<div className="buttons">
					<button
						type="button"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
						onClick={() => {
							console.log(projectDetails);
						}}
					>
						Submit
					</button>
					<button
						type="button"
						className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
    );
}
