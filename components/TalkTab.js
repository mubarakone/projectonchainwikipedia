import React, { useState } from 'react';

export default function TalkTab({ switchToEditTab }) {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const teamData = [
    {
      team: '#digitalmarketing',
      description: 'Our group promotes and sells products and services by leveraging online marketing tactics',
      industry: 'Marketing team',
    },
    // Add other team data here
  ];

  const selectedTeamData = teamData.find((team) => team.team === selectedTeam);

  return (
    <div>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        {/* <!-- Card --> */}
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                {/* Header */}
                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
                  {selectedTeam ? (
                    <>
                      <button onClick={() => setSelectedTeam(null)} className="text-blue-600 dark:text-blue-500 hover:underline">Back</button>
                      <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">{selectedTeam}</h2>
                    </>
                  ) : (
                    <>
                      <div>
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">Teams</h2>
                        <p className="text-sm text-gray-600 dark:text-neutral-400">Create teams, edit, download and more.</p>
                      </div>
                      <div>
                        <div className="inline-flex gap-x-2">
                          {/* Export Button */}
                          <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
                            <button id="hs-as-table-table-export-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                              <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" x2="12" y1="15" y2="3" />
                              </svg>
                              Export
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-as-table-table-export-dropdown">
                              {/* Options */}
                              <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">Options</span>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Copy</a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Print</a>
                              </div>
                              <div className="py-2 first:pt-0 last:pb-0">
                                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">Download options</span>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Excel</a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">.CSV</a>
                                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">.PDF</a>
                              </div>
                            </div>
                          </div>
                          {/* Filter Button */}
                          <div className="hs-dropdown [--placement:bottom-right] relative inline-block" data-hs-dropdown-auto-close="inside">
                            <button id="hs-as-table-table-filter-dropdown" type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
                              <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M3 6h18" />
                                <path d="M7 12h10" />
                                <path d="M10 18h4" />
                              </svg>
                              Filter
                              <span className="inline-flex items-center gap-1.5 py-0.5 px-1.5 rounded-full text-xs font-medium border border-gray-300 text-gray-800 dark:border-neutral-700 dark:text-neutral-300">2</span>
                            </button>
                            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-48 z-20 bg-white shadow-md rounded-lg mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-as-table-table-filter-dropdown">
                              <div className="divide-y divide-gray-200 dark:divide-neutral-700">
                                <label htmlFor="hs-as-filters-dropdown-frequency" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-frequency" checked />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Frequency</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-status" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-status" checked />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Status</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-created" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-created" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Created</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-due-date" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-due-date" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Due Date</span>
                                </label>
                                <label htmlFor="hs-as-filters-dropdown-amount" className="flex py-2.5 px-3">
                                  <input type="checkbox" className="shrink-0 mt-0.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-as-filters-dropdown-amount" />
                                  <span className="ms-3 text-sm text-gray-800 dark:text-neutral-200">Amount</span>
                                </label>
                              </div>
                            </div>
                          </div>
                          <button onClick={switchToEditTab} type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">Download all</button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* End Header */}
                {selectedTeam ? (
                  <div className="px-6 py-4">
                    <p className="text-sm text-gray-600 dark:text-neutral-400"><strong>Description: </strong>{selectedTeamData.description}</p>
                    <p className="text-sm text-gray-600 dark:text-neutral-400"><strong>Industry: </strong>{selectedTeamData.industry}</p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Team</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Description</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <a className="group inline-flex items-center gap-x-2" href="#">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">Industry</span>
                            <svg className="flex-shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </a>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {teamData.map((team, index) => (
                        <TeamRow key={index} team={team.team} description={team.description} industry={team.industry} onClick={() => setSelectedTeam(team.team)} />
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
      {/* End Table Section */}
    </div>
  );
}

function TeamRow({ team, description, industry, onClick }) {
  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800" onClick={onClick}>
      <td className="size-px whitespace-nowrap">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <div className="block text-sm text-blue-600 decoration-2 hover:underline dark:text-blue-500">{team}</div>
          </div>
        </a>
      </td>
      <td className="h-px w-72 min-w-72">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <p className="text-sm text-gray-500 dark:text-neutral-500">{description}</p>
          </div>
        </a>
      </td>
      <td className="size-px whitespace-nowrap">
        <a className="block relative z-10" href="#">
          <div className="px-6 py-2">
            <span className="inline-flex items-center gap-1.5 py-1 px-2 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-neutral-900 dark:text-neutral-200">{industry}</span>
          </div>
        </a>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="px-6 py-2">
          <div className="hs-dropdown [--placement:bottom-right] relative inline-block">
            <button id="hs-table-dropdown-1" type="button" className="hs-dropdown-toggle py-1.5 px-2 inline-flex justify-center items-center gap-2 rounded-lg text-gray-700 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:text-neutral-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
            </button>
            <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-20 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" aria-labelledby="hs-table-dropdown-1">
              <div className="py-2 first:pt-0 last:pb-0">
                <span className="block py-2 px-3 text-xs font-medium uppercase text-gray-400 dark:text-neutral-600">Actions</span>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Rename team</a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Add to favorites</a>
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Archive team</a>
              </div>
              <div className="py-2 first:pt-0 last:pb-0">
                <a className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700 dark:hover:text-neutral-300" href="#">Delete</a>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
}
