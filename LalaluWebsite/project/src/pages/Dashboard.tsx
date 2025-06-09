import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Calendar, Clock, CheckCircle, XCircle, User, Mail, Phone, Edit } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Appointment } from '../types';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Dashboard: React.FC = () => {
  const { client } = useAuth();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  if (!client) {
    return <Navigate to="/login\" replace />;
  }

  const upcomingAppointments = client.appointments.filter(apt => apt.status === 'upcoming');
  const pastAppointments = client.appointments.filter(apt => apt.status === 'completed');

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (timeString: string) => {
    const [hours, minutes] = timeString.split(':');
    const hour = parseInt(hours);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour % 12 || 12;
    return `${displayHour}:${minutes} ${ampm}`;
  };

  const getStatusIcon = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="h-5 w-5 text-blue-600" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'cancelled':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: Appointment['status']) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'cancelled':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Welcome back, {client.firstName}!
            </h1>
            <p className="text-xl opacity-90">
              Manage your appointments and account information
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-10 w-10 text-purple-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {client.firstName} {client.lastName}
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center text-gray-600">
                  <Mail className="h-5 w-5 mr-3 text-purple-600" />
                  <span>{client.email}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="h-5 w-5 mr-3 text-purple-600" />
                  <span>{client.phone}</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-6">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Your Stats
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Total Appointments</span>
                  <span className="font-semibold text-gray-900">
                    {client.appointments.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Upcoming</span>
                  <span className="font-semibold text-blue-600">
                    {upcomingAppointments.length}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Completed</span>
                  <span className="font-semibold text-green-600">
                    {pastAppointments.length}
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Appointments */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  My Appointments
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setActiveTab('upcoming')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'upcoming'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                    }`}
                  >
                    Upcoming ({upcomingAppointments.length})
                  </button>
                  <button
                    onClick={() => setActiveTab('past')}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      activeTab === 'past'
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                    }`}
                  >
                    Past ({pastAppointments.length})
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {activeTab === 'upcoming' && upcomingAppointments.length === 0 && (
                  <div className="text-center py-12">
                    <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No upcoming appointments
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Book your next treatment to maintain your skin care routine
                    </p>
                    <Button>Book New Appointment</Button>
                  </div>
                )}

                {activeTab === 'past' && pastAppointments.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      No past appointments
                    </h3>
                    <p className="text-gray-600">
                      Your appointment history will appear here
                    </p>
                  </div>
                )}

                {(activeTab === 'upcoming' ? upcomingAppointments : pastAppointments).map((appointment) => (
                  <Card key={appointment.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {getStatusIcon(appointment.status)}
                          <h3 className="text-lg font-semibold text-gray-900 ml-2">
                            {appointment.serviceName}
                          </h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-purple-600" />
                            <span>{formatDate(appointment.date)}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-2 text-purple-600" />
                            <span>{formatTime(appointment.time)}</span>
                          </div>
                        </div>
                        
                        {appointment.notes && (
                          <div className="mt-2">
                            <p className="text-sm text-gray-600">
                              <strong>Notes:</strong> {appointment.notes}
                            </p>
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(appointment.status)}`}>
                          {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                        </div>
                        <div className="text-lg font-bold text-purple-600 mt-2">
                          ${appointment.price}
                        </div>
                        
                        {appointment.status === 'upcoming' && (
                          <div className="mt-2 space-x-2">
                            <Button size="sm" variant="outline">
                              Reschedule
                            </Button>
                            <Button size="sm" variant="outline">
                              Cancel
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;