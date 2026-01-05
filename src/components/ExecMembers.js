export default function ExecMembers() {
  const members = [
    { name: "Member 1", role: "Role" },
    { name: "Member 2", role: "Role" },
    { name: "Member 3", role: "Role" },
    { name: "Member 4", role: "Role" },
    { name: "Member 5", role: "Role" },
    { name: "Member 6", role: "Role" },
  ];

  return (
    <section id="team" className="w-full bg-[#E1DFC7] py-16 px-8 md:px-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 font-mono mb-12 text-center">
        EXEC MEMBERS
      </h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member, index) => (
          <div 
            key={index}
            className="border-4 border-black p-6 bg-white"
          >
            <div className="aspect-square bg-gray-200 mb-4"></div>
            <h3 className="font-mono font-bold text-xl text-gray-800">{member.name}</h3>
            <p className="font-mono text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

