import React, { useEffect, useRef } from "react";
import Pagination from "./Pagination";
import Loader from "../Loader/Loader";
import Dropdown from "../Dropdown";
import { getByStatusText } from "../../utils/color.util";
import { validateEmail } from "../../utils/helper";


export default function Table({
	checkData,
	data,
	dropdownMenu,
	pagination,
	setPagination,
	colorizeStatus,
	openModal,
	isLoading = false,
	_clickedRowData,
	checkbox={text: "Bulk Delete", action: undefined}
}) {
	 let [checked, setChecked] = React.useState([]);
		const checkedList = checkData?.checkedList || checked,
	 setCheckedList = checkData?.setCheckedList || setChecked;
	
		const allInputChecker = useRef(false);

	const check = {
		all: (_) => {
			setCheckedList(data?.map((item) => item._id));
			check.checkAll();
		},
		checkAll: (_) => {
			checkedList.forEach((_id) => {
				if(document.getElementById(_id)) document.getElementById(_id).checked = true;
				else setCheckedList([])
			});
		},
		handleCheck: () => {
			const status = allInputChecker.current.checked;
			if (status) {
				check.all();
			} else {
				check.toggleCheck();
				setCheckedList([]);
			}
		},
		toggleCheck: (res) => {
			if (res) {
				const newCheckedList = [...checkedList];
				if (newCheckedList.includes(res._id)) {
					newCheckedList.splice(newCheckedList.indexOf(res._id), 1);
				} else {
					newCheckedList.push(res._id);
				}
				setCheckedList(newCheckedList);
			} else {
				checkedList.forEach((_id) => {
					document.getElementById(_id).checked = false;
				});
			}
		},
	};

	check.checkAll();
	useEffect(() => {
		if (checkedList.length === data.length) {
			allInputChecker.current.checked = true;
		} 
		else if(checkedList.length === 0) {
			const unCheck = item => item.checked = false
			document.querySelectorAll('input').forEach(unCheck)
		}
		else {
			allInputChecker.current.checked = false;
		}
	}, [checkedList, data]);

	const keys = Object.keys(data[0]);
	const firstTHName = keys.filter(d=>!d.startsWith('_'))[0];
	return (
		<div className=" flow-root">
        <div className="table-container -mx-4 -my-4 px-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="rounded-lg inline-block min-w-full  py-2 align-middle ">
			<table className="min-w-full border-separate border-spacing-y-2 ">
				<thead className="border-spacing-y-20 ">
					<tr className="left-10 ">
					{(checkbox.action || checkData) &&<th scope="col" className="relative py-3.5 pl-4 pr-3 text-left ">
							<input
								className={`cursor-pointer absolute left-3 top-5  ml-2 ${ isLoading || !pagination.total ? 'invisible':'visible' }`}
								type="checkbox"
								ref={allInputChecker}
								onChange={check.handleCheck}
							/>
						</th>
							}
						{keys?.map((name, i) => {
							return (
								!name.startsWith("_") && (
									<th scope="col" key={i} className={` px-3 py-3.5 text-left  ${(checkbox.action===undefined && checkData===undefined) ? '' : 'pl-1'}`}>
										{name}
									</th>
								)
							);
						})}
						{ dropdownMenu && <th>Action</th>}
					</tr>
				</thead>

				{!isLoading &&
					(pagination.total ? (
						<tbody>
							{data.map((res, index) => {
								return (
									<tr className={`mt-5 bg-white`} key={index}>
									{(checkbox.action || checkData ) &&	<td className="td whitespace-nowrap py-4 pl-4 pr-3 sm:pl-6 lg:pl-8">
											<input
												className="ml-2 cursor-pointer"
												type="checkbox"
												id={res?._id}
												onChange={(_) => check.toggleCheck(res)}
											/>
										</td>}

										{keys.map((name, i) => {
											const value = res[name];
											const _clickable =
												res._clickable && res._clickTarget === value;
											const style = getByStatusText(value, colorizeStatus);
											return (
												!name.startsWith("_") && (
													<td
														key={res._id + "_" + i}
														className={`whitespace-nowrap px-3 py-4 td truncate  ${validateEmail(value) ? "": "capitalize"}`}>
															<>
															{typeof value == "string" &&
														(value.startsWith("https") || value.startsWith("http") || value.startsWith("/")) ? (
													
																<img
															className={`${(checkbox.action===undefined && checkData===undefined) &&name === firstTHName?'ml-0':''}`}
																src={value}
																style={{
																	width: "50px",
																	height: "50px",
																	borderRadius: "45px",
																}}
																alt={window.location.pathname.substring(1)}
															/>
															
														) :(
														<span
															onClick={
																_clickable
																	? () => {
																			_clickedRowData(res._data);
																			openModal(true);
																	  }
																	: () => {}
															}
															className={`${
																Object.keys(style).length
																	? "py-1 px-2 rounded"
																	: ""
															} ${_clickable ? "cursor-pointer" : ""} ${(checkbox.action===undefined && checkData===undefined) &&name === firstTHName?'ml-1':''}`}
															style={{ ...style }}>
															{value}
														</span>)}
														</>
													</td>
												)
											);
										})}

										{dropdownMenu && (
											<td className="items-center flex justify-center">
												<Dropdown {...{ menu: dropdownMenu, rowProp: res }} />
											</td>
										)}
									</tr>
								);
							})}
						</tbody>
					) : (
						""
					))}
			</table>
			</div>
			{ !pagination?.hidden && <>
			{isLoading && (
				<div className="flex my-5 items-center justify-center w-full">
					<Loader />
				</div>
			)}
			{!isLoading && !pagination.total && (
				<div className="flex my-5 items-center justify-center w-full">
					<h3 className="text-center">No record found</h3>
				</div>
			)}
			{pagination.total ? (
				<div className={`w-full my-10 rounded-b-lg  bg-white py-3 pl-3 ${isLoading ? "visible" : "visible"}`}>
					<div className="flex justify-between items-center">
						<p className="text-sm" style={{ color: "var(--C_blue_light)" }}>
							Showing{" "}
							<span>
								{Math.min(pagination.length, pagination.total) ||
									pagination.pageSize}
							</span>{" "}
							{pagination.total > 1 ? "results" : "result"} of{" "}
							<span>{pagination.total}</span>{" "}
							{pagination.total > 1 ? "records" : "record"}
						</p>

						<Pagination
							{...{
								page: pagination.page-1,
								itemsPerPage: pagination.pageSize,
								setPagination,
								total: pagination.total,
							}}
						/>
					</div>
				</div>
			) : (
				""
			)}
			</>}
			
		</div>
		</div>
	);
}
