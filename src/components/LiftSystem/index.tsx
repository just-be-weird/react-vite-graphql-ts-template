import classes from './lift-sys.module.css';
import cx from 'clsx';

const FLOOR_HEIGHT = 80; // pixels
const DOOR_OPEN_TIME = 1000; // 1 second
const FLOOR_TRAVEL_TIME = 500; // 500 ms per floor

interface FloorRequest {
  floor: number;
  direction: 'up' | 'down';
}

export function LiftSystem() {
  const currentFloor = 0;
  const floors = [0, 1, 2, 3, 4]; // 0 is ground floor
  const isDoorOpen = false;

  return (
    <div className={cx(classes.center, classes.container)}>
      <div className={classes.section}>
        <div className={classes.controls}>
          {floors.map((floor) => (
            <div
              key={floor}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <span style={{ minWidth: '20px' }}>{floor}</span>
              <button
                onClick={() => {}}
                style={{
                  padding: '5px 10px',
                  fontSize: '12px',
                  // backgroundColor: if moving use ? '#ccc' : '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  // cursor: if moving use ? 'not-allowed' : 'pointer',
                }}
              >
                Call
              </button>
            </div>
          ))}
        </div>
        <div
          style={{
            width: '100px',
            height: FLOOR_HEIGHT * floors.length,
            backgroundColor: '#f1f3f5',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '100%',
              height: FLOOR_HEIGHT,
              backgroundColor: '#228be6',
              position: 'absolute',
              bottom: currentFloor * FLOOR_HEIGHT,
              transition: 'bottom 0.05s linear',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: isDoorOpen ? '20%' : '100%',
                height: '100%',
                backgroundColor: '#ffffff',
                transition: 'width 0.5s ease-in-out',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '18px', fontWeight: 'bold' }}>
                {Math.round(currentFloor)}
              </span>
            </div>
          </div>
        </div>
        <div className={classes.status}>
          <h3 style={{ margin: '0 0 10px 0' }}>Lift Status</h3>
          <p style={{ margin: '0' }}>Current Floor: 0</p>
          <p style={{ margin: '0' }}>Status: Moving / Door Open /Idle</p>
          <p style={{ margin: '0' }}>Queue: 0,1</p>
        </div>
      </div>
    </div>
  );
}
