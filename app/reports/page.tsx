function Reports() {
  return (
    <div className="site-container">
      <div className="m-12 text-center">
        <h1>Reports & Posts</h1>
      </div>
      <div className="mx-auto mb-20 flex w-fit flex-wrap items-stretch justify-center justify-items-stretch gap-12">
        <div className="relative flex w-2xs max-w-full min-w-0 flex-col items-center rounded-md border border-black/17.5 bg-white p-6 text-center wrap-break-word shadow-[1px_2px_2px_2px_rgba(20,20,20,0.4)]">
          <div>gbSTEM is pleased to present our Impact Report for the 2023-2024 school year!</div>
          {/* Relative, and the PDF it names lives in `public/reports/`. Both halves matter: the
              absolute `https://gbstem.org/...` form this replaced only ever worked by coincidence
              on production, and it 404'd there from the Next.js migration (9db8975) until now,
              because that commit deleted the file this path serves. A preview deploy would also
              have sent a reviewer to the production copy instead of the one under review. */}
          <a href="/reports/gbstem-impact.pdf" className="btn mt-8 w-fit text-base">
            Impact Report 2023-2024
          </a>
        </div>
      </div>
    </div>
  );
}

export default Reports;
