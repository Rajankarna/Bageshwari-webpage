import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, Mail, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DoctorsSection = () => {
  const navigate = useNavigate(); // Initialize navigate hook
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const doctors = [
    {
      id: 1,
      name: 'Prof. Dr. Deepak Dutta',
      specialty: 'Consultant Orthopaedic Surgeon',
      qualification: 'MBBS (IOM), MS (NAMS), Mch(UK), Fellowship in Joint Replacement (India), Fellowship in AO Trauma (Thiland, Japan)',
      experience: '18+ years',
      image: '/Prof Dr deepak Dutta.png', // Ensure this image exists in your public folder
      availability: 'Sun-Fri: 4:00 PM - 8:00 PM ,Sat: 11:00 AM - 4:00 PM' ,
      email: 'bageshwarihospital11@gmail.com',
      department: 'Orthopaedics, Tarauma & Joint Replacement Surgeon'
    },
    {
      id: 2,
      name: 'Dr. Umakanta Bhattarai',
      specialty: 'Gynecologist and obstetrician',
      qualification: 'MBBS (IOM), MD (Obs/Gynae)',
      experience: '14 years',
      image: '/Uma kanth bhattarai.png',
      availability: 'On Call (Daily from 10am-1pm)',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Gynecologist and obstetrician'
    },
   
    {
      id: 3,
      name: 'Prof. Dr. Parshuram Mishra',
      specialty: 'Senior Consultant Surgeon',
      qualification: 'MBBS, MS (General Surgery)',
      experience: '30+ years',
      image: '/Prashuram mishra.png',
      availability: 'Afternoon-10am to 1pm (Daily)',
      email: 'bageshwarihospital11@gmail.com',
      department: 'General Surgery'
    },
    {
      id: 5,
      name: 'Dr. Rishi Kant Aryal',
      specialty: 'General Surgery, Urologist',
      qualification: 'MBBS, MS (NAMS), Fellowship in Urology (India)',
      experience: '16+ years',
      image: '/Rishi kanth aryal.png',
      availability: ' 5 PM - 6 PM Evening',
      email: 'bageshwarihospital11@gmail.com',
      department: 'General Surgery'
    },
    {
      id: 6,
      name: 'Dr. Apurva Shrestha',
      specialty: '(Internal Medicine)',
      ualification: 'MBBS, MD-General Medicine',
      experience: '10+ years',
      image: '/apurba shrestha.png',
      availability: '10:00 AM - 1:00 PM Evening',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Internal Medicine'
    },
    {
      id: 7,
      name: 'Assoc. Prof. Dr. Heempali Das Dutta',
      specialty: 'ENT Surgeon, Specialization in Pediatric ENT Surgery',
      qualification: 'MBBS, MS(IOM) Gold Medalist in ENT',
      experience: '15+ years',
      image: '/Dr Heempali-Dutta.png',
      availability: '10:00 AM - 1:00 PM ( Wednesday and Saturday)',
      email: 'bageshwarihospital11@gmail.com',
      department: 'ENT'
    },
     {
      id: 8,
      name: 'Dr. Suraj Chandra  Sharma',
      specialty: 'ENT Surgeon',
      qualification: 'MBBS, MD-ENT',
      experience: '8 years',
      image: '/Suraj chandra sharma.png',
      availability: '10:00 AM - 1:00 PM Everyday',
      email: 'bageshwarihospital11@gmail.com',
      department: 'ENT'
    },
     {
      id: 9,
      name: 'Dr. Ram Krishna Baral',
      specialty: 'Physician & Gastroenterologist',
      qualification: 'MBBS, MD( Internal Medicine, NAMS), DM (Gastro, NAMS)',
      experience: '14 years',
      image: '/Ram Krishna Baral.png',
      availability: 'On Call',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Physician & Gastroenterologist'
    },
     {
      id: 10,
      name: 'Dr. Kiran BK',
      specialty: 'General Surgeon',
      qualification: 'MBBS , MS (General Surgery)',
      experience: '1+ years',
      image: '/Dr Kiran BK.png',
      availability: 'On Call (Daily from 10am-1pm)',
      email: 'bageshwarihospital11@gmail.com',
      department: 'General Surgeon'
    },
     {
      id: 11,
      name: 'Dr. Pradip KC',
      specialty: 'Anesthesiologist',
      qualification: 'MBBS, MD-Anaesthesia',
      experience: '5+ years',
      image: '/Praveen kumar giri.png',
      availability: 'On Call',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Anesthesiologist'
    },
     {
      id: 12,
      name: 'Dr. Rossu Thapa',
      specialty: 'Consultant Rardiologist',
      qualification: 'MBBS, MD-Radiology',
      experience: '15 years',
      image: '/Rossu Thapa.png',
      availability: '10:00 AM - 1:00 PM Everyday',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Rardiologist'
    },
    {
      id: 13,
      name: 'Dr. Rajesh Pratap Shah',
      specialty: 'Consultant Orthopedic and Spine Surgeon',
      qualification: 'MBBS, MS, Fellowship in Spine Surgery(India)',
      experience: '12 years',
      image: '/Rajesh pratap.png',
      availability: 'On Call',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Orthopedic'
    },
    {
      id: 14,
      name: 'Dr. Akankshya shrestha',
      specialty: 'Dermatologist',
      qualification: 'MBBS, MS in Dermatology',
      experience: '3+ years',
      image: '/Akanshya shrestha.jpeg',
      availability: 'On Call',
      email: 'bageshwarihospital11@gmail.com',
      department: 'Dermatologist'
    },
     {
      id: 14,
      name: 'Phr. Shyam Sundar Yadav',
      specialty: 'Physiotherapy-1',
      qualification: 'BPT (India)',
      experience: '11 years',
      image: '/Shyam sundar yadav.png',
      availability: '4:00 PM - 8:00 PM Everyday',
      email: 'bageshwarihospital11@gmail.com',
      department: 'BPT'
    }

  ];

  const departments = ['All','Orthopaedics & Trauma' ,'General Medicine', 'Gynecology', 'ENT', 'Surgery', 'Emergency', 'Diagnostics'];

  const filteredDoctors = selectedDepartment === 'All' 
    ? doctors 
    : doctors.filter(doctor => doctor.department === selectedDepartment);

  return (
    <section id="doctors" className="section-padding bg-gray-50 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced healthcare professionals is dedicated to providing 
            the highest quality medical care with compassion and expertise.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedDepartment === dept
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map((doctor, index) => (
            <Card 
              key={doctor.id} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-emerald-100 group-hover:border-emerald-300 transition-colors duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600">{doctor.qualification}</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Calendar className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">{doctor.availability}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm break-all">{doctor.email}</span>
                  </div>
                </div>

                <Button
                  onClick={() => navigate(`/appointment`)}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty state */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No doctors found in this department.</p>
          </div>
        )}

        {/* Call to action */}
        <div className="text-center mt-16 animate-on-scroll">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Can't Find the Right Doctor?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Contact our patient care team, and we'll help you find the perfect healthcare professional 
              for your specific needs and schedule your appointment.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-full font-semibold"
            >
              Contact Patient Care
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;