'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';

interface TeamMemberCardProps {
  name: string;
  school: string;
  graduationYear: string;
  profilePic: string;
  bio: string;
  role: string;
}

export default function TeamMemberCard({
  name,
  school,
  graduationYear,
  profilePic,
  bio,
  role,
}: TeamMemberCardProps) {
  const [showModal, setShowModal] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Handle bio modal
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  // Track image loading
  const handleImageLoad = () => setImageLoaded(true);

  return (
    <div className="group relative flex h-full w-3/4 max-w-full min-w-0 flex-col rounded-md bg-white wrap-break-word shadow-sm transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2">
      <div className="relative mx-auto mt-6 mb-4 flex size-[180px] items-center justify-center overflow-hidden rounded-full bg-light">
        <div className="relative mx-auto aspect-square size-full max-w-45 overflow-hidden rounded-full">
          <Image
            src={`/images/headshots/${profilePic}`}
            alt={name}
            fill
            sizes="180px"
            onLoad={handleImageLoad}
            className="size-full max-w-75 object-cover group-hover:scale-108"
            style={{
              opacity: imageLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out, transform 0.5s ease',
            }}
          />
          {!imageLoaded && (
            <div
              className="absolute top-0 left-0 flex size-full items-center justify-center rounded-full bg-[#f1f1f1] text-2xl font-bold text-[#67aeda]"
              aria-hidden="true"
            >
              {name
                .split(' ')
                .map((word) => word[0])
                .join('')}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-auto flex-col justify-between p-4 pb-6 text-center">
        <div className="h-35">
          <h4 className="mb-1 font-semibold">{name}</h4>
          <p className="mb-1 text-muted">{role}</p>
          <p className="mb-4 text-[0.875em]">{`${school} ${graduationYear}`}</p>
        </div>
        <div>
          <button
            type="button"
            onClick={handleClick}
            className="btn rounded-full px-6 py-1"
            aria-label={`View bio for ${name}`}
          >
            View Bio
          </button>
        </div>
      </div>

      {/* Bio Modal */}
      <Dialog open={showModal} onClose={handleClose} className="relative z-1050">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/50 transition-opacity duration-150 ease-linear data-closed:opacity-0"
        />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="m-2 flex min-h-[calc(100%-1rem)] items-center sm:mx-auto sm:my-7 sm:min-h-[calc(100%-3.5rem)] sm:max-w-125">
            <DialogPanel
              transition
              className="flex w-full flex-col rounded-lg border border-black/17.5 bg-white bg-clip-padding text-dark transition duration-300 ease-out data-closed:-translate-y-12.5 data-closed:opacity-0"
            >
              <div className="flex shrink-0 items-center border-b border-divider p-4">
                <DialogTitle as="div" className="mb-0 text-h4 leading-normal font-medium">
                  <div className="flex flex-col">
                    <span>{name}</span>
                    <small className="text-muted">{role}</small>
                  </div>
                </DialogTitle>
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close"
                  className="-m-2 ms-auto box-content size-4 rounded-md p-2 opacity-50 hover:opacity-75 focus-visible:opacity-100 focus-visible:shadow-[0_0_0_0.25rem_rgb(13_110_253/0.25)] focus-visible:outline-0"
                >
                  {/* "X" icon */}
                  <svg viewBox="0 0 16 16" className="size-4" aria-hidden>
                    <path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414" />
                  </svg>
                </button>
              </div>
              <div className="relative flex-auto p-4">
                <p>{bio}</p>
              </div>
              <div className="flex shrink-0 flex-wrap items-center justify-end border-t border-divider p-3">
                <button
                  type="button"
                  className="btn m-1 border-[#6c757d] hover:border-[#565e64] hover:bg-[#5c636a]"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
