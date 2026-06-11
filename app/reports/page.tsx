'use client';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Reports() {
  return (
    <div className="container">
      <div className="m-5 text-center">
        <h1>Reports & Posts</h1>
      </div>
      <div className="mx-auto mb-20 flex w-fit flex-wrap items-stretch justify-center justify-items-stretch gap-12">
        <Card className="d-flex flex-column align-items-center w-[18rem] max-w-full p-4 text-center shadow-[1px_2px_2px_2px_rgba(20,20,20,0.4)]">
          <div>gbSTEM is pleased to present our Impact Report for the 2023-2024 school year!</div>
          <Button
            href={'https://gbstem.org/reports/gbstem-impact.pdf'}
            className="mt-8 w-fit text-[1rem]!"
          >
            Impact Report 2023-2024
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default Reports;
