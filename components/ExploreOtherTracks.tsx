import PageButton from '@/components/PageButton';

export default function ExploreOtherTracks({ trackToOmit }: { trackToOmit?: string }) {
  const tracks = [
    { link: '/cs', color: '#67aeda', className: 'Computer Science Track' },
    { link: '/math', color: '#aaaaaa', className: 'Math Track' },
    { link: '/engineering', color: '#ffc819', className: 'Engineering Track' },
    { link: '/science', color: '#4CAF50', className: 'Science Track' },
    { link: '/robotics', color: '#bf60bf', className: 'Robotics Program' },
  ];

  const filteredTracks = tracks.filter((track) => track.link !== trackToOmit);

  return (
    <>
      <h2 className="text-center p-5">Explore Other Tracks:</h2>
      <div className="d-flex flex-wrap justify-content-center mb-5 gap-4">
        {filteredTracks.map((track) => (
          <PageButton
            key={track.link}
            link={track.link}
            color={track.color}
            className={track.className}
          />
        ))}
      </div>
    </>
  );
}
