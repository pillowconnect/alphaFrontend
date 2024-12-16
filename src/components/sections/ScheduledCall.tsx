export function ScheduledCalls() {
    return (
      <div className="absolute z-10 -bottom-12 right-12 md:-bottom-16 md:right-72 rotate-[-19deg]">
        <div style={{ opacity: 1, transform: 'scale(1) rotate(0deg)' }}>
          <div className="scale-90 md:scale-100">
            <div className="w-[200px] h-[220px] md:w-[220px] md:h-[242px] rounded-2xl overflow-hidden bg-white shadow-[0px_7px_15px_0px_#3333331A,0px_27px_27px_0px_#33333317,0px_60px_36px_0px_#3333330D,0px_106px_43px_0px_#33333303,0px_166px_47px_0px_#33333300]">
              <div className="h-8 md:h-10 font-normal text-xs md:text-sm flex items-center px-3 md:px-4 text-neutral-700" style={{ backgroundColor: '#DFEBF3' }}>
                Meetings
              </div>
              <div className="p-2 space-y-2">
                <p className="text-xs md:text-sm p-1 text-neutral-700">Upcoming Meets</p>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Meeting with Brian</p>
                  <label className="text-xs text-neutral-700">10:30 | Hyderabad</label>
                </div>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Project Update Call</p>
                  <label className="text-xs text-neutral-700">14:30 | Remote</label>
                </div>
                <div className="px-1">
                  <p className="text-sm md:text-base -mb-1.5">Evening Catchup</p>
                  <label className="text-xs text-neutral-700">18:30 | Remote</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  