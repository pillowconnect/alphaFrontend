export function ScheduledCallsLeft() {
    return (
      <div className="absolute z-10 bottom-6 left-4 md:-bottom-16 md:-left-80 rotate-[8deg]">
        <div style={{ opacity: 1, transform: 'scale(1) rotate(0deg)' }}>
          <div className="scale-90 md:scale-100">
            <div className="w-[200px] md:w-[220px] h-[220px] md:h-[242px] rounded-2xl overflow-hidden bg-white shadow-[0px_7px_15px_0px_#3333331A,0px_27px_27px_0px_#33333317,0px_60px_36px_0px_#3333330D,0px_106px_43px_0px_#33333303,0px_166px_47px_0px_#33333300]">
              <div className="h-8 md:h-10 font-normal text-xs md:text-sm flex items-center px-2 md:px-4 text-neutral-700" style={{ backgroundColor: '#DFEBF3' }}>
                Freelancer Schedule
              </div>
              <div className="p-2 space-y-2">
                <p className="text-xs md:text-sm p-1 text-neutral-700">Upcoming Calls</p>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Call with Alex</p>
                  <label className="text-xs text-neutral-700">11:00 | Remote</label>
                </div>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Project Discussion</p>
                  <label className="text-xs text-neutral-700">15:00 | Bangalore</label>
                </div>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Weekly Standup</p>
                  <label className="text-xs text-neutral-700">19:00 | Remote</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  