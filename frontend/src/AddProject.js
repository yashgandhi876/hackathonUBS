import { useState, useEffect } from "react";
import { TextField } from "@material-ui/core";
import "./App.css"
import Select from "react-select";
import axios from "axios";

export default function AddProject() {

  const defaultState = {
		name: "",
		desc: "",
		repoLink: "",
		tags: [],
		contributors: [],
  };
	const [projectDetails, setProjectDetails] = useState(defaultState);

	const [tags, setTags] = useState([]);
	const [contributors, setContributors] = useState([]);


	const fetchData = async () => {
		await axios.get("http://localhost:8080/get-tags").then( res => setTags(res.data.map(d=>d.name)));
	    await axios.get("http://localhost:8080/get-contributors").then( res => setContributors(res.data));
	}

	useEffect(() => {fetchData()}, [])


  const onCancel = () => setProjectDetails(defaultState);

	const options = [
		{ value: "Chocolate", label: "Chocolate" },
		{ value: "Strawberry", label: "Strawberry" },
		{ value: "Vanilla", label: "Vanilla" },
	];

	const onChangeInput = (event) =>
		setProjectDetails((oldProjectDetails) => ({
			...oldProjectDetails,
			[event.target.name]: event.target.value,
		}));

	const onSubmit = () => {
		axios.post("http://localhost:8080/add-project", projectDetails);
	};

	const onDropDownChange = (event, { name, option, action, removedValue }) => {
		if (action === "select-option") {
			return setProjectDetails((oldProjectDetails) => ({
				...oldProjectDetails,
				[name]: [...oldProjectDetails[name], option],
			}));
		} else {
			return setProjectDetails((oldProjectDetails) => ({
				...oldProjectDetails,
				[name]: oldProjectDetails[name].filter((e) => e?.value !== removedValue?.value),
			}));
		}
	};

	return (
		<div className="container">
			<div className="formContainer">
				<h1 className="mb-8 text-4xl font-extrabold leading-none heading text-gray-700">Add Project</h1>
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
						options={tags.map(tag => ({label: tag, value: tag}))}
						className="basic-multi-select field selectField"
						classNamePrefix="Tags"
						styles={{
							control: base => ({
							  ...base,
							  border: 0,
							  // This line disable the blue border
							  boxShadow: "none"
							})
						  }}
					/>
				</div>
				<div className="fields">
					<label htmlFor=""> Contributors</label>
					<Select
						isMulti
						styles={{
							control: base => ({
							  ...base,
							  border: 0,
							  // This line disable the blue border
							  boxShadow: "none"
							})
						  }}
						name="contributors"
						value={projectDetails.contributors}
						onChange={onDropDownChange}
						options={contributors.map(contributor => ({label: contributor.name, value: contributor.email}))}
						className="basic-multi-select field selectField"
						classNamePrefix="Contributors"
					/>
				</div>
				<div className="buttons">
					<button
						type="button"
						className="submitBtn text-white  focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
						onClick={onSubmit}
					>
						Submit
					</button>
					<button
						type="button"
            onClick={onCancel}
						className="cancelBtn py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
					>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
}
