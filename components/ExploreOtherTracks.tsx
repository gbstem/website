import PageButton from '@/components/PageButton';

export default function ExploreOtherTracks({ trackToOmit }: { trackToOmit?: string }) {
  const tracks = [
    { link: '/cs', color: '#67aeda', className: 'Computer Science Track' },
    { link: '/math', color: '#aaaaaa', className: 'Math Track' },
    { link: '/engineering', color: '#ffc819', className: 'Engineering Track' },
    { link: '/science', color: '#4CAF50', className: 'Science Track' },
    { link: '/robotics', color: '#bf60bf', className: 'Robotics Track' },
  ];

  const filteredTracks = tracks.filter((track) => track.link !== trackToOmit);

  return (
    <>
      <h2 className="p-5 text-center">Explore Other Tracks:</h2>
      <div className="d-flex justify-content-center mb-5 flex-wrap gap-4">
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
