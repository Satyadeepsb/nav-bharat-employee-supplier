import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Team = () => {
    const teamMembers = [
        {
            name: 'Mr. Ganesh Shinde',
            position: 'Chief Executive Officer',
            department: 'Leadership',
            image: '/images/ganesh.jpg',
            bio: 'With over 15 years in talent acquisition, Ganesh leads our company with a vision to revolutionize employee staffing solutions.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Strategic Leadership', 'Business Development', 'Client Relations']
        },
        {
            name: 'Mrs. Pooja Shinde',
            position: 'Director of Operations',
            department: 'Operations',
            image: '/images/pooja.jpg',
            bio: 'Pooja ensures seamless operations and maintains our high standards of service delivery across all client engagements.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Operations Management', 'Process Optimization', 'Quality Assurance']
        },
        {
            name: 'Mr. Shubham Shinde',
            position: 'Client Success Manager',
            department: 'Client Relations',
            image: '/images/shubham.jpg',
            bio: 'Shubham ensures our clients achieve their staffing goals and maintains long-term relationships built on trust and excellence.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Client Relations', 'Account Management', 'Customer Success']
        },
        {
            name: 'Mr. Niraj Patil',
            position: 'Senior Recruitment Manager',
            department: 'Talent Acquisition',
            image: '/images/niraj.jpg',
            bio: 'Niraj specializes in executive search and has successfully placed over 500 professionals.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Executive Search', 'Recruiting', 'Industry Expertise']
        },
        {
            name: 'Mr. Kedar Shinde',
            position: 'Staffing Specialist',
            department: 'Staffing Division',
            image: '/images/kedar.jpg',
            bio: 'Kedar brings deep staffing industry knowledge and helps client to find qualified professionals.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Recruiting', 'Staffing', 'Compliance']
        },
        {
            name: 'Mr. Nitin Jadhav',
            position: 'Recruitment Lead',
            department: 'Recruitment Division',
            image: '/images/nitin.jpg',
            bio: 'Nitin leads our recruitment team, specializing in placing professionals.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Recruitment', 'Compliance', 'Leadership']
        },
        {
            name: 'Mr. Abhijeet Birambole',
            position: 'Staffing Specialist',
            department: 'Staffing Division',
            image: '/images/abhi.jpg',
            bio: 'Abhijeet brings deep staffing industry knowledge and helps client to find qualified professionals.',
            email: 'info@navbharatemployeesuppliers.com',
            linkedin: '#',
            specialties: ['Recruiting', 'Staffing', 'Compliance']
        }
    ];

    return (
        <section id="team" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Meet NES Expert Team
                    </h2>
                    <p className="text-lg text-gray-600">
                        Our experienced professionals are dedicated to finding the perfect talent match for your business.
                        Get to know the experts who make it all happen.
                    </p>
                </div>

                {/* First Row - 4 Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {teamMembers.slice(0, 4).map((member, index) => (
                        <div key={index} className="max-w-[240px] w-full mx-auto">
                        <TeamCard member={member} />
                        </div>
                    ))}
                </div>

                {/* Second Row - 3 Members Centered */}
                <div className="flex justify-center gap-8 flex-wrap">
                    {teamMembers.slice(4).map((member, index) => (
                        <div key={index} className="max-w-[240px] w-full mx-auto">
                        <TeamCard member={member} />
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Ready to Work with Our Team?
                        </h3>
                        <p className="text-gray-600 mb-4">
                            Our experts are ready to understand your unique staffing needs and provide tailored solutions.
                        </p>
                        <button
                            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                            className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                        >
                            Schedule a Consultation
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TeamCard = ({ member }) => (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group w-full mx-auto">
        <div className="relative w-full aspect-[3/4] max-h-[260px]">
        <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>

        <div className="p-4 flex flex-col justify-between h-full">
        <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-1">{member.position}</p>
                <p className="text-sm text-gray-500">{member.department}</p>
            </div>

            <p className="text-gray-600 text-sm mb-4 text-center">{member.bio}</p>

            <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-1">
                    {member.specialties.map((specialty, idx) => (
                        <span
                            key={idx}
                            className="bg-primary-50 text-primary-700 text-xs px-2 py-1 rounded-full"
                        >
              {specialty}
            </span>
                    ))}
                </div>
            </div>

           {/* <div className="flex justify-center gap-3 pt-4 border-t border-gray-100 mt-auto">
                <a
                    href={`mailto:${member.email}`}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    title="Send Email"
                >
                    <Mail className="h-4 w-4" />
                </a>
                <a
                    href={member.linkedin}
                    className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                    title="LinkedIn Profile"
                >
                    <Linkedin className="h-4 w-4" />
                </a>
            </div>*/}
        </div>
    </div>
);

export default Team;